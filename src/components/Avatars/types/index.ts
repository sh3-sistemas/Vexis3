/**
 *
 * Sh3AvatarFallbackInitials is a Vue component.
 *
 * [Component](./Sh3AvatarFallbackInitials.vue)
 *
 * @module avatars
 *
 */
import type { DefineComponent } from "vue";
import type { AvatarProps } from "primevue";
/**
 * **SH3 - Sh3AvatarFallbackInitials**
 *
 * _Sh3AvatarFallbackInitials is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3AvatarFallbackInitials.vue)
 * @group Component
 *
 */

type Profile = {
  name: string;
};
export type Sh3AvatarProps = AvatarProps & Profile;

declare module "vue" {
  export interface GlobalComponents {
    Sh3AvatarFallbackInitials: DefineComponent<Sh3AvatarProps, any, any>;
    Sh3AvatarLayout: DefineComponent<any, any, any>;
  }
}
