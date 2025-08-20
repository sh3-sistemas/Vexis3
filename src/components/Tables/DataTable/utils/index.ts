export const tableStyle = {
  column: {
    headerCell:
      "bg-indigo-100 text-mercury-900 border-y-mercury-300 border-x-transparent !py-2.5 !px-2",
    columnHeaderContent: "justify-center",
    bodyCell:
      "first:border-l-transparent last:border-r-transparent border-mercury-300 !px-2 !py-px min-h-[40px] text-center justify-items-center",
  },
};

export const ptColumnFilters = {
  filterElementContainer: "flex-auto",
  filterMenuIcon: "!min-w-4",
  filterClearIcon: "!min-w-4",
  pcFilterClearButton: { root: "hidden" },
  pcFilterApplyButton: { root: "hidden" },
};

export const getValueByPath = (obj: Record<string, any>, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export const updateValueByPath = (
  obj: Record<string, any>,
  path: string,
  value: any,
) => {
  const pathArray = path.split(".");
  const lastPath = pathArray.pop();
  const lastObj = pathArray.reduce((acc, part) => acc && acc[part], obj);
  lastObj[lastPath as string] = value;
};
