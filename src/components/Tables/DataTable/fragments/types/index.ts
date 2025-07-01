import { markRaw } from "vue";

import TableInputBoolean from "../inputs/TableInputBoolean.vue";
import TableInputDate from "../inputs/TableInputDate.vue";
import TableInputNumber from "../inputs/TableInputNumber.vue";
import TableInputMask from "../inputs/TableInputMask.vue";
import TableInputTag from "../inputs/TableInputTag.vue";
import TableInputText from "../inputs/TableInputText.vue";

import type { CheckboxProps, TagProps, InputTextProps } from "primevue";

export type TableInputBooleanProps = {
  edit: boolean;
  checkboxProps?: CheckboxProps;
  tagProps?: TagProps;
};

export type PresetKeyDate = "date" | "month" | "year";
export type TableInputDateProps = {
  edit: boolean;
  preset?: PresetKeyDate;
  dateFormatOutput?: string;
};

export type PresetKeyMask = "cpf" | "cnpj" | "tel" | "cel" | "cep";
export type TableInputMaskProps = {
  edit: boolean;
  preset?: PresetKeyMask;
};

export type PresetKeyNumber = "currency" | "percentage";
export type TableInputNumberProps = {
  edit: boolean;
  preset?: PresetKeyNumber;
};

export type TableInputTagProps = {
  edit: boolean;
  inputProps?: InputTextProps;
  tagProps?: TagProps;
};

export type TableInputTextProps = {
  edit: boolean;
};

export type InputComponentsKeys =
  | "boolean"
  | PresetKeyDate
  | "number"
  | PresetKeyNumber
  | "mask"
  | PresetKeyMask
  | "tag"
  | "text";
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
  cnpj: { component: markRaw(TableInputMask), preset: "cnpj" },
  cep: { component: markRaw(TableInputMask), preset: "cep" },
  tel: { component: markRaw(TableInputMask), preset: "tel" },
  cel: { component: markRaw(TableInputMask), preset: "cel" },
  tag: { component: markRaw(TableInputTag) },
  text: { component: markRaw(TableInputText) },
};

export type PresetsType<Keys extends string | number | symbol, T> = {
  [key in Keys]: T;
};
