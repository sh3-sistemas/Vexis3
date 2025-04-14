import type { DataTableItemColumn } from "@/components/Tables/DataTable/types";
import type {
  CheckboxProps,
  InputMaskProps,
  MultiSelectProps,
  InputNumberProps,
  SelectProps,
  DropdownProps,
  InputTextProps,
} from "primevue";

export type FilterProps = {
  col: DataTableItemColumn;
  filterCallback: () => void;
};

export type FilterComponentProps =
  | CheckboxProps
  | InputMaskProps
  | MultiSelectProps
  | InputNumberProps
  | SelectProps
  | DropdownProps
  | InputTextProps;
