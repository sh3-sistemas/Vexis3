import type {
  CheckboxProps,
  TagProps,
  /* DatePickerProps,
  InputMaskProps,
  InputNumberProps, */
  InputTextProps,
} from "primevue";

export type TableInputBooleanProps = {
  edit: boolean;
  checkboxProps: CheckboxProps;
  tagProps: TagProps;
};

export type PresetKeyDate = "date" | "month" | "year";
export type TableInputDateProps = {
  edit: boolean;
  preset?: PresetKeyDate;
  dateFormatOutput?: string;
}; // & DatePickerProps;

export type PresetKeyMask = "cpf" | "cnpj" | "tel" | "cel" | "cep";
export type TableInputMaskProps = {
  edit: boolean;
  preset?: PresetKeyMask;
}; // & InputMaskProps;

export type PresetKeyNumber = "currency" | "percentage";
export type TableInputNumberProps = {
  edit: boolean;
  preset?: PresetKeyNumber;
}; // & InputNumberProps;

export type TableInputTagProps = {
  edit: boolean;
  inputProps: InputTextProps;
  tagProps: TagProps;
};
