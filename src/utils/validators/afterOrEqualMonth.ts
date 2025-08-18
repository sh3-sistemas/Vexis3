import type { VueformElement } from "@vueform/vueform";
import { Validator } from "@vueform/vueform";

/**
 * Validador customizado para o Vueform que verifica se a data de um campo (em meses)
 * é igual ou posterior à data de outro campo no mesmo formulário.
 *
 * @remarks
 * Este validador é totalmente reativo e funciona em ambas as direções. Ele possui as seguintes características:
 * - **Busca Recursiva:** Encontra o campo de comparação em qualquer nível de aninhamento no formulário.
 * - **Reatividade Bidirecional:** A validação é re-executada tanto quando o campo atual muda, quanto quando o campo de comparação muda.
 * - **Formatos de Data Automáticos:** Utiliza a propriedade `valueFormat` definida nos componentes `DateElement` para garantir a interpretação correta das datas.
 *
 * @example
 * ```vue
 * <template>
 * <Vueform>
 * <DateElement name="mes_inicial" value-format="YYYY-MM" />
 * <DateElement
 * name="mes_final"
 * value-format="YYYY-MM"
 * :rules="['after_or_equal_month:mes_inicial']"
 * />
 * </Vueform>
 * </template>
 * ```
 * @see https://vueform.com/docs/validating-elements#custom-validation-rules
 */
export default class AfterOrEqualMonth extends Validator {
  /**
   * Busca recursivamente por um elemento na árvore de elementos do formulário.
   * Este método é público para contornar problemas de contexto `this`, mas deve ser considerado de uso interno da classe.
   * @internal
   * @param elements - O objeto de elementos onde a busca será iniciada.
   * @param name - O nome do elemento a ser encontrado.
   * @returns A instância do VueformElement encontrada ou `null`.
   */
  findElementRecursively(
    elements: object,
    name: string,
  ): VueformElement | null {
    for (const key in elements) {
      const element = elements[key as keyof typeof elements] as VueformElement;

      if (element.name === name) {
        return element;
      }

      if (element.elements || element.children$) {
        const foundInChild = this.findElementRecursively(
          element.elements || element.children$,
          name,
        );
        if (foundInChild) {
          return foundInChild;
        }
      }
    }
    return null;
  }

  /**
   * O nome oficial da regra de validação, usado para registro global e no template.
   */
  get name(): string {
    return "after_or_equal_month";
  }

  /**
   * A mensagem de erro dinâmica exibida ao usuário quando a validação falha.
   */
  get message(): string {
    const otherElement = this.findElementRecursively(
      this.form$.elements$,
      this.param,
    );
    return `O campo ${this.attributeName} deve conter data igual ou posterior ao campo ${otherElement?.label || this.param}.`;
  }

  /**
   * Captura o nome do outro campo a ser comparado, fornecido como parâmetro para a regra.
   * @example Na regra `'after_or_equal_month:mes_inicial'`, o `param` será `'mes_inicial'`.
   */
  get param(): string {
    return this.attributes[0];
  }

  /**
   * A instância do outro elemento do formulário com o qual este campo será comparado.
   * Utiliza a busca recursiva para encontrar o elemento em qualquer parte da árvore do formulário.
   */
  get other$(): VueformElement | null {
    return this.findElementRecursively(this.form$.elements$, this.param);
  }

  /**
   * O método principal que executa a lógica de validação.
   * @param value - O valor atual do campo que está sendo validado.
   * @returns `true` se a validação passar, `false` caso contrário.
   */
  check = (value: string | null): boolean => {
    const otherValue = this.other$?.value;

    if (!value || !otherValue) {
      return true;
    }

    const format = this.element$?.valueFormat || "YYYY-MM-DD";
    const otherFormat = this.other$?.valueFormat || format;

    return this.moment(value, format).isSameOrAfter(
      this.moment(otherValue, otherFormat),
      "month",
    );
  };

  /**
   * O método de inicialização do ciclo de vida do validador.
   * Sua principal responsabilidade é configurar um 'watcher' no outro campo
   * para acionar a revalidação reativamente quando o valor dele mudar.
   */
  init(): void {
    this.form$.$nextTick(() => {
      const otherElement = this.other$;
      if (otherElement) {
        this.watchOther();
      } else {
        console.error(
          `[INIT] ERRO: O elemento "${this.param}" não foi encontrado dentro do $nextTick.`,
        );
      }
    });
  }
}
