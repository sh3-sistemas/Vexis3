type SchemaFields = {
  as: string;
  name: string;
  label: string;
  type: string;
  variation: "regular";
  children: Array<{
    tag: string;
    text: string;
    childAttrs: object;
  }>;
  attrs: object | any;
  placeholder?: string;
  validateSuccess: boolean;
  successMessage: string | undefined;
  disabled: boolean | undefined;
  colPlacement: string;
  value: string;
  inputType: string;
  size?: string;
  options?: Array<object>;
  config?: object;
};

export type Schema = {
  formId?: string;
  fields: Array<SchemaFields>;
};
