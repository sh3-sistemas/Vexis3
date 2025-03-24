import { ref, watch, type Ref } from "vue";
import type { DataTableItemColumn } from "../../DataTable/types";

/**
 * Custom hook for managing filter functionality in a table based on PrimeVue premises.
 * @param filterDisplay - The display mode for the filters (e.g., "menu" or "row").
 * @param columns - An array of columns for the filter table.
 * @returns An object containing the managed state for the filters.
 */
export default function useFilterTable(
  filterDisplay: string | unknown,
  columns: Ref<Array<DataTableItemColumn>>,
) {
  // state encapsulated and managed by the composable
  const filters = ref();

  /**
   * Retrieves the field value for a given column.
   * @param col - The column object.
   * @returns The field value.
   */
  const getField = (col: DataTableItemColumn): string => {
    if (!col.props) return col.field;
    return (
      col.props.filterField ? col.props.filterField : col.field
    ) as string;
  };

  /**
   * Generates a filter model template for a given column.
   * @param col - The column object.
   * @returns The filter model template.
   */
  const getFilterModelTemplate = (col: DataTableItemColumn) => {
    return { value: null, matchMode: col.filter?.matchMode ?? "startsWith" };
  };

  /**
   * Mounts a menu filter for a given column.
   * @param col - The column object.
   * @param filterModel - The filter model.
   */
  const mountMenuFilter = (
    col: DataTableItemColumn,
    filterModel: { [key: string]: any },
    dynamicFilter: { [key: string]: any },
  ) => {
    const field = getField(col);

    dynamicFilter[field] = {
      operator: col.filter?.operator,
      constraints: [{ ...filterModel }],
    };
  };

  /**
   * Mounts a row filter for a given column.
   * @param col - The column object.
   * @param filterModel - The filter model.
   */
  const mountRowFilter = (
    col: DataTableItemColumn,
    filterModel: { [key: string]: any },
    dynamicFilter: { [key: string]: any },
  ) => {
    const field = getField(col);

    dynamicFilter[field] = { ...filterModel };
  };

  /**
   * Mounts the filters based on the filter display mode.
   */
  const mountFilters = async () => {
    const dynamicFilter: { [key: string]: any } = {};
    if (!columns.value) return dynamicFilter;

    const mountFilter =
      filterDisplay === "menu" ? mountMenuFilter : mountRowFilter;

    columns.value.forEach((col) => {
      if (!col.filter?.disabled) {
        const filterModel = getFilterModelTemplate(col);
        mountFilter(col, filterModel, dynamicFilter);
      }
    });

    filters.value = dynamicFilter;
  };

  watch(
    columns,
    () => {
      mountFilters();
    },
    { immediate: true },
  );
  // expose managed state as return value
  return { filters };
}
