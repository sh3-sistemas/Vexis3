import type { ConfirmationOptions } from "primevue/confirmationoptions";

/**
 * Tipos de diálogos disponíveis.
 *
 * @type {'deletion' | 'confirmation' | 'return' | 'crud-confirmation'} DialogGroup
 */
export type DialogGroup =
  | "deletion"
  | "confirmation"
  | "return"
  | "crud-confirmation";
/**
 * Tipo base para diálogos que inclui opções de confirmação parciais e uma cor de ícone.
 *
 */
export type DialogBase = Partial<ConfirmationOptions> & {
  /**
   * Color of the main icon.
   **/
  iconColor: string;
};
