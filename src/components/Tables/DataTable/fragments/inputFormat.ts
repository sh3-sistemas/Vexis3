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

export const inputComponents = {
  boolean: markRaw(TableInputBoolean),
  date: markRaw(TableInputDate),
  number: markRaw(TableInputNumber),
  mask: markRaw(TableInputMask),
  tag: markRaw(TableInputTag),
};
