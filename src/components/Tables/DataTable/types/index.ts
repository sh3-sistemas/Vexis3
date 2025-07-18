/**
 *
 * [Primevue Based](https://v3.primevue.org/datatable)
 * @module dataTables
 */
import type { DataTableProps } from "primevue/datatable";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { markRaw } from "vue";
import {
  SelectFilter,
  SelectFilterTag,
  TextFilter,
  DateFilter,
  BooleanFilter,
  NumberFilter,
  MaskFilter,
  MultiSelectFilter,
} from "../../Filters";
import type { FilterComponentProps } from "../../Filters/fragments/types";
import { type DataTableItemColumnPropsVariations } from "../fragments/types";

type ItemColum = {
  field: any;
  header: string;
  filterType: string;
  default: any;
  sortable: boolean;
  visible: boolean;
  editable: boolean;
  cellFormater: object;
  cellFormaterEdit: { component: object; props: object; name?: string };
  filter?: DataTableFilter;
  //TODO: Realizar tipagem correta desses valores em breve
} & DataTableItemColumnPropsVariations;

export type Sh3DataTableEditableProps = DataTableProps & {
  dataKey: string;
  updateRow: (row: object) => void;
  columns: Array<ItemColum>;
  emptyString: string;
  rowExpansion?: boolean;
  disabled: boolean;
};

export const filterComponents = {
  SelectFilter: markRaw(SelectFilter),
  SelectFilterTag: markRaw(SelectFilterTag),
  TextFilter: markRaw(TextFilter),
  DateFilter: markRaw(DateFilter),
  BooleanFilter: markRaw(BooleanFilter),
  NumberFilter: markRaw(NumberFilter),
  MaskFilter: markRaw(MaskFilter),
  MultiSelectFilter: markRaw(MultiSelectFilter),
};

export type Action = {
  color: string;
  icon: string;
  action: (item: any) => void;
  permission: (item: any) => boolean | true;
  disabled: (item: any) => boolean | false;
};

type DataTableFilter = {
  operator: keyof typeof FilterOperator;
  matchMode: keyof typeof FilterMatchMode;
  type: keyof typeof filterComponents;
  disabled: boolean;
  props?: FilterComponentProps;
};

export type DataTableItemColumn = {
  field: string;
  header: string;
  filter?: DataTableFilter;
} & DataTableItemColumnPropsVariations;

export type SelectionMode = "single" | "multiple" | undefined | null;

export type Sh3DataTableProps = {
  empty: string;
  items: Array<any>;
  columns: Array<DataTableItemColumn>;
  actions: Array<Action>;
  selectionMode?: SelectionMode;
  rowExpansion?: boolean;
};

/**
 * **SH3 - Sh3DataTableEditable**
 *
 * _Editable Data Table is an extension to standard DataTable element with icons and theming._
 * --- ---
 * [Primevue Based Component](https://www.primevue.org)
 * @group Component
 */
