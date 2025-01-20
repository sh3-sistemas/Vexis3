/**
 *
 * Sh3DropdownMenu is a Vue component.
 *
 * [Component](./Sh3DropdownMenu.vue)
 *
 * @module dropdowns
 *
 */
import type { DefineComponent, VNode } from "vue";

export interface Sh3HeaderSwitcher {
  /**
   * Default header slot.
   */
  "header"(): VNode[];
  /**
   * Default footer slot.
   */
  "footer"(): VNode[];
}

/**
 * **SH3 - Sh3Competencia**
 *
 * _Sh3Competencia is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3Competencia.vue)
 * @group Component
 *
 */

export type Competencia = {
  mes: string;
  estado: string;
};

export interface Sh3CompetenciaProps {
  competencias: Competencia[];
  value?: Competencia;
}

/**
 * Defines valid emits in Sh3Competencia component.
 */
export interface Sh3CompetenciaEmits {
  /**
   * Callback to invoke when the value changes.
   */
  gereciar(): void;
  selecionar(): Competencia;
  newCompetencia(): void;
  changeYear(): number;
}
declare module "vue" {
  export interface GlobalComponents {
    Sh3DropdownMenu: DefineComponent<any, any, any>;
    Sh3SelectDropdown: DefineComponent<any, any, any>;
    Sh3UserDropdown: DefineComponent<any, any, any>;
    Sh3Competencia: DefineComponent<
      Sh3CompetenciaProps,
      any,
      Sh3CompetenciaEmits
    >;
  }
}
