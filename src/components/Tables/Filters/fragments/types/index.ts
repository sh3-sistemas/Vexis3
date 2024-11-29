import type { DataTableItemColumn } from "@/components/Tables/DataTable/types";

export type FilterProps = {
  col: DataTableItemColumn;
  filterCallback: () => void;
};
