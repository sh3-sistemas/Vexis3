import { markRaw } from "vue";

import TableInputBoolean from "./inputs/TableInputBoolean.vue";
import TableInputDate from "./inputs/TableInputDate.vue";
import TableInputNumber from "./inputs/TableInputNumber.vue";
import TableInputMask from "./inputs/TableInputMask.vue";
import TableInputTag from "./inputs/TableInputTag.vue";

export const formatBoolean = (value: any) =>
  typeof value == "boolean" ? value : value == "true";

export const formatBooleanToString = (value: any) =>
  formatBoolean(value) ? "Sim" : "Não";

export const inputComponents = <
  { [key: string]: { component: object; preset?: string } }
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
  cnpj: { component: markRaw(TableInputMask), preset: "cnpj" },
  cep: { component: markRaw(TableInputMask), preset: "cep" },
  tel: { component: markRaw(TableInputMask), preset: "tel" },
  cel: { component: markRaw(TableInputMask), preset: "cel" },
  tag: { component: markRaw(TableInputTag) },
};
