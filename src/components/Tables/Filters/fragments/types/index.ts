import type { ItemColum } from "../../../DataTable/Sh3DataTable.vue";

export type FilterProps = {
  col: ItemColum;
  filterCallback: () => void;
};
