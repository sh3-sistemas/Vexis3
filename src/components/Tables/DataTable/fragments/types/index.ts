import type {
  ColumnProps,
  CheckboxProps,
  TagProps,
  InputTextProps,
  DatePickerProps,
  InputMaskProps,
  InputNumberProps,
} from "primevue";

interface CommonInputProps {
  edit: boolean;
}
export interface TableInputBooleanProps extends CommonInputProps {
  checkboxProps?: CheckboxProps;
  tagProps?: TagProps;
}

export type PresetKeyDate = "date" | "month" | "year";
export interface TableInputDateProps extends CommonInputProps {
  preset?: PresetKeyDate;
  dateFormatOutput?: string;
}

export type PresetKeyMask = "cpf" | "cnpj" | "tel" | "cel" | "cep";
export interface TableInputMaskProps extends CommonInputProps {
  preset?: PresetKeyMask;
}

export type PresetKeyNumber = "currency" | "percentage";
export interface TableInputNumberProps extends CommonInputProps {
  preset?: PresetKeyNumber;
}

export interface TableInputTagProps extends CommonInputProps {
  inputProps?: InputTextProps;
  tagProps?: TagProps;
}

export interface TableInputTextProps extends CommonInputProps {}

export type InputComponentsKeys =
  | "boolean"
  | PresetKeyDate
  | "number"
  | PresetKeyNumber
  | "mask"
  | PresetKeyMask
  | "tag"
  | "text";

export type ItemColumnProps<T> = ColumnProps & {
  input?: T | ((item: any, edit: boolean) => T);
};
/**
 * Representa todas as variações possíveis de colunas com entrada customizada para uso em tabelas dinâmicas.
 *
 * Cada variação é discriminada por um valor fixo na propriedade `type`, permitindo configurar
 * a interface e o comportamento da coluna de acordo com o tipo de entrada necessário.
 *
 * A propriedade `props` aceita um objeto ou função que define as propriedades específicas
 * do componente de entrada, via `ItemColumnProps<T>`.
 *
 */
export type DataTableItemColumnPropsVariations =
  | {
      type?: "boolean";
      props?: ItemColumnProps<TableInputBooleanProps>;
    }
  | {
      type?: PresetKeyDate;
      props?: ItemColumnProps<TableInputDateProps & DatePickerProps>;
    }
  | {
      type?: "number" | PresetKeyNumber;
      props?: ItemColumnProps<TableInputNumberProps & InputNumberProps>;
    }
  | {
      type?: "mask" | PresetKeyMask;
      props?: ItemColumnProps<TableInputMaskProps & InputMaskProps>;
    }
  | {
      type?: "tag";
      props?: ItemColumnProps<TableInputTagProps>;
    }
  | {
      type?: "text";
      props?: ItemColumnProps<TableInputTextProps & InputTextProps>;
    };

export type PresetsType<Keys extends string | number | symbol, T> = {
  [key in Keys]: T;
};
