export const getValueByPath = (obj: Record<string, any>, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};
