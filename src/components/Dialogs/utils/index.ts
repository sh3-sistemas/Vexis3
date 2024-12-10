import { PrimeIcons } from "@primevue/core/api";
import type { ConfirmationOptions } from "primevue/confirmationoptions";
import type { DialogBase, DialogGroup } from "../types";

/**
 * Configurações base para o diálogo de retorno.
 * Exibe um aviso sobre possíveis alterações não salvas.
 *
 * @type {DialogBase}
 */
export const returnBaseActions: DialogBase = {
  header: "Tem certeza que deseja retornar?",
  message: "Você pode ter alterações não salvas que serão perdidas.",
  iconColor: "text-amber-600",
  icon: PrimeIcons.EXCLAMATION_CIRCLE,
  rejectClass: "p-button-outlined p-button-sm",
  acceptClass: "warn",
  rejectLabel: "Cancelar",
  acceptLabel: "Retornar",
};

/**
 * Configurações base para o diálogo de confirmação.
 * Exibe uma mensagem para confirmar a ação de salvar um registro.
 *
 * @type {DialogBase}
 */
export const confirmationBaseActions: DialogBase = {
  header: "Tem certeza que deseja salvar este registro?",
  message: "Você poderá modificá-lo no futuro",
  iconColor: "text-grass-500",
  icon: PrimeIcons.CHECK_CIRCLE,
  rejectClass: "p-button-outlined p-button-sm",
  acceptClass: "success",
  rejectLabel: "Cancelar",
  acceptLabel: "Confirmar",
};

/**
 * Configurações base para o diálogo de exclusão.
 * Exibe um aviso crítico sobre a irreversibilidade da ação de exclusão.
 *
 * @type {DialogBase}
 */
export const deletionBaseActions: DialogBase = {
  header: "Tem certeza que deseja excluir o cadastro selecionado?",
  message: "Essa ação não poderá ser desfeita.",
  iconColor: "text-red-700",
  icon: PrimeIcons.EXCLAMATION_TRIANGLE,
  rejectClass: "p-button-outlined p-button-sm",
  acceptClass: "danger",
  rejectLabel: "Cancelar",
  acceptLabel: "Excluir",
};

/**
 * Cria uma configuração de diálogo combinando as opções fornecidas com as opções base.
 *
 * @param {ConfirmationOptions} options - Opções específicas do diálogo, como ações de aceitação e rejeição.
 * @param {DialogBase} base - As opções base para o diálogo, contendo valores padrão para o cabeçalho e a mensagem.
 * @returns {ConfirmationOptions} - Um objeto contendo todas as opções combinadas (do grupo, base e opções específicas).
 */
const dialogBase = (
  options: ConfirmationOptions,
  base: DialogBase,
): ConfirmationOptions => {
  const { accept, reject } = options;

  const dialog = { ...base, ...options };
  const group: DialogGroup = "crud-confirmation";

  return {
    group,
    ...dialog,
    accept,
    reject,
  };
};

/**
 * Cria um diálogo de exclusão, combinando as opções fornecidas com as opções base de exclusão.
 *
 * @param {ConfirmationOptions} options - Opções específicas para o diálogo de exclusão, como ações de aceitação e rejeição.
 * @returns {ConfirmationOptions} - Um objeto contendo todas as opções combinadas para o diálogo de exclusão.
 */
export const deletionDialogBase = (
  options: ConfirmationOptions,
): ConfirmationOptions => dialogBase(options, deletionBaseActions);

/**
 * Cria um diálogo de confirmação, combinando as opções fornecidas com as opções base de confirmação.
 *
 * @param {ConfirmationOptions} options - Opções específicas para o diálogo de confirmação, como ações de aceitação e rejeição.
 * @returns {ConfirmationOptions} - Um objeto contendo todas as opções combinadas para o diálogo de confirmação.
 */
export const confirmationDialogBase = (
  options: ConfirmationOptions,
): ConfirmationOptions => dialogBase(options, confirmationBaseActions);

/**
 * Cria um diálogo de retorno, combinando as opções fornecidas com as opções base de confirmação.
 *
 * @param {ConfirmationOptions} options - Opções específicas para o diálogo de retorno, como ações de aceitação e rejeição.
 * @returns {ConfirmationOptions} - Um objeto contendo todas as opções combinadas para o diálogo de retorno.
 */
export const returnDialogBase = (
  options: ConfirmationOptions,
): ConfirmationOptions => dialogBase(options, returnBaseActions);
