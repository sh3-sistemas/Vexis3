/**
 *
 * [Primevue Based](https://v3.primevue.org/datatable)
 * @module dataTables
 */
import type { ColumnProps, TagProps } from "primevue";
import type { DataTableProps } from "primevue/datatable";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { markRaw } from "vue";
import { SelectFilterTag, TextFilter, DateFilter } from "../../Filters";

type ItemColum = {
  field: any;
  header: string;
  filterType: string;
  default: any;
  sortable: boolean;
  visible: boolean;
  editable: boolean;
  cellFormater: object;
};

export type Sh3DataTableEditableProps = DataTableProps & {
  updateRow: (row: object) => void;
  columns: Array<ItemColum>;
  emptyString: string;
};

export const filterComponents = {
  SelectFilterTag: markRaw(SelectFilterTag),
  TextFilter: markRaw(TextFilter),
  DateFilter: markRaw(DateFilter),
};

export type Action = {
  color: string;
  icon: string;
  action: (item: any) => void;
  permission: (item: any) => boolean | true;
  disabled: (item: any) => boolean | false;
};

export type DataTableItemColumn = {
  field: string;
  header: string;
  type?: "tag" | "download" | "actions";
  props?: ColumnProps & { tag?: (item: any) => TagProps };
  filter?: {
    operator: keyof typeof FilterOperator;
    matchMode: keyof typeof FilterMatchMode;
    type: keyof typeof filterComponents;
    options: any[];
  };
};

export type SelectionMode = "single" | "multiple" | undefined | null;

export type Sh3DataTableProps = {
  empty: string;
  items: Array<any>;
  columns: Array<DataTableItemColumn>;
  actions: Array<Action>;
  selectionMode?: SelectionMode;
};

/**
 * **SH3 - Sh3DataTableEditable**
 *
 * _Editable Data Table is an extension to standard DataTable element with icons and theming._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 */