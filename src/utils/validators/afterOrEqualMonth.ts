import type { VueformElement } from "@vueform/vueform";
import { Validator } from "@vueform/vueform";

export default class AfterOrEqualMonth extends Validator {
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

  get name(): string {
    return "after_or_equal_month";
  }

  get message(): string {
    const otherElement = this.findElementRecursively(
      this.form$.elements$,
      this.param,
    );
    return `O campo ${this.attributeName} deve conter data igual ou posterior ao campo ${otherElement?.label || this.param}.`;
  }

  get param(): string {
    return this.attributes[0];
  }

  get other$(): VueformElement | null {
    return this.findElementRecursively(this.form$.elements$, this.param);
  }

  check = (value: string | null): boolean => {
    // Agora o 'check' simplesmente usa o getter 'other$'
    const otherValue = this.other$?.value;

    console.log({ otherValue, value });
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

  init(): void {
    this.form$.$nextTick(() => {
      // DEBUG 1: Vamos confirmar se o 'other$' está sendo encontrado neste momento.
      const otherElement = this.other$;
      if (otherElement) {
        // DEBUG 2: Se foi encontrado, qual é o seu 'path'? Ele é uma string válida?
        console.log(
          `[INIT] Elemento '${this.param}' encontrado. `,
          otherElement,
        );

        this.watchOther();
      } else {
        // DEBUG 3: Se não foi encontrado, este é o nosso problema.
        console.error(
          `[INIT] ERRO: O elemento "${this.param}" não foi encontrado dentro do $nextTick.`,
        );
      }
    });
  }
}
