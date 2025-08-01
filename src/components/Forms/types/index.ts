/**
 *
 * Sh3GenericForm is a Vue component.
 *
 * [Component](./Sh3RouterLinkTabs.vue)
 *
 * @module forms
 *
 */
import type { DefineComponent } from "vue";
import type Sh3GenericForm from "../Sh3GenericForm.vue";
/**
 * **SH3 - Sh3GenericForm**
 *
 * _Sh3GenericForm is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3GenericForm.vue)
 * @group Component
 *
 */

export type CrudOptions = {
  delete: boolean;
  save: boolean;
  cancel: boolean;
  disabled?: boolean;
  edit?: boolean;
};

export type FormOptions = {
  crud: CrudOptions;
};

export interface Sh3GenericFormProps {
  submitForm: () => void;
  deleteRegister: () => void;
  formatLoad?: () => void;
  options?: FormOptions;
}

export type GenericFormInstanceType = InstanceType<typeof Sh3GenericForm>;

declare module "vue" {
  export interface GlobalComponents {
    Sh3GenericForm: DefineComponent<Sh3GenericFormProps, any, any>;
  }
}
