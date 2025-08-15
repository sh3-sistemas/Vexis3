import { markRaw } from "vue";

import TableInputBoolean from "./inputs/TableInputBoolean.vue";
import TableInputDate from "./inputs/TableInputDate.vue";
import TableInputMask from "./inputs/TableInputMask.vue";
import TableInputMultiSelect from "./inputs/TableInputMultiSelect.vue";
import TableInputNumber from "./inputs/TableInputNumber.vue";
import TableInputSelect from "./inputs/TableInputSelect.vue";
import TableInputTag from "./inputs/TableInputTag.vue";
import TableInputText from "./inputs/TableInputText.vue";
import { type InputComponentsKeys } from "./types";

/**
 * Converte um valor para booleano seguindo regras específicas.
 *
 * @param  {string | number | null | undefined} value - O valor a ser convertido para booleano.
 *
 * @returns A representação booleana do valor de acordo com estas regras:
 * - Se o valor já for booleano, retorna o próprio valor
 * - Se for string, retorna `true` apenas para "true" (case insensitive)
 * - Para outros valores, usa a conversão padrão do JavaScript (truthy/falsy)
 *
 * @example
 * // Retorna true
 * formatBoolean(true);
 * formatBoolean("True");
 * formatBoolean("TRUE");
 *
 * @example
 * // Retorna false
 * formatBoolean(false);
 * formatBoolean("false");
 * formatBoolean(0);
 * formatBoolean(null);
 * formatBoolean(undefined);
 */
export const formatBoolean = (value: string | number | null | undefined) => {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value.toLowerCase() === "true";
  return Boolean(value);
};

/**
 * Converte um valor para string booleano "Sim" ou "Não".
 *
 * @param {string | number | null | undefined} value - O valor a ser convertido para string booleana.
 *
 * @returns {"Sim" | "Não"} A string da representação do valor como string booleana.
 *
 * @example
 * // Retorna "Sim"
 * formatBoolean(true);
 * formatBoolean("True");
 * formatBoolean("TRUE");
 * // Retorna "Não"
 * formatBoolean(false);
 * formatBoolean("false");
 * formatBoolean(0);
 * formatBoolean(null);
 * formatBoolean(undefined);
 */
export const formatBooleanToString = (
  value: string | number | null | undefined,
) => (formatBoolean(value) ? "Sim" : "Não");

export const inputComponents = <
  { [key in InputComponentsKeys]: { component: object; preset?: string } }
>{
  boolean: { component: markRaw(TableInputBoolean) },
  date: { component: markRaw(TableInputDate) },
  month: { component: markRaw(TableInputDate), preset: "month" },
  year: { component: markRaw(TableInputDate), preset: "year" },
  number: { component: markRaw(TableInputNumber) },
  currency: { component: markRaw(TableInputNumber), preset: "currency" },
  percentage: { component: markRaw(TableInputNumber), preset: "percentage" },
  mask: { component: markRaw(TableInputMask) },
  cpf: { component: markRaw(TableInputMask), preset: "cpf" },
  cpfCnpj: { component: markRaw(TableInputMask), preset: "cpfCnpj" },
  cnpj: { component: markRaw(TableInputMask), preset: "cnpj" },
  cep: { component: markRaw(TableInputMask), preset: "cep" },
  tel: { component: markRaw(TableInputMask), preset: "tel" },
  cel: { component: markRaw(TableInputMask), preset: "cel" },
  multiSelect: { component: markRaw(TableInputMultiSelect) },
  multiSelectTag: {
    component: markRaw(TableInputMultiSelect),
    preset: "multiSelectTag",
  },
  select: { component: markRaw(TableInputSelect) },
  selectTag: { component: markRaw(TableInputSelect), preset: "selectTag" },
  tag: { component: markRaw(TableInputTag) },
  text: { component: markRaw(TableInputText) },
};
