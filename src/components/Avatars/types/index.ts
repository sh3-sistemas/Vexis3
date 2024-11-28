
/**
 * 
 * Sh3AvatarFallbackInitials is a Vue component.
 * 
 * [Component](./Sh3AvatarFallbackInitials.vue)
 * 
 * @module avatars
 * 
 */
import type { ClassComponent, GlobalComponentConstructor } from "primevue/ts-helpers";
/**
 * **SH3 - Sh3AvatarFallbackInitials**
 *
 * _Sh3AvatarFallbackInitials is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3AvatarFallbackInitials.vue)
 * @group Component
 *
 */
declare class Sh3AvatarFallbackInitials extends ClassComponent<any, any, any> { }

/**
 * **SH3 - Sh3AvatarLayout**
 *
 * _Sh3AvatarLayout is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3AvatarLayout.vue)
 * @group Component
 *
 */
declare class Sh3AvatarLayout extends ClassComponent<any, any, any> { }

declare module 'vue' {
    export interface GlobalComponents {
        Sh3AvatarFallbackInitials: GlobalComponentConstructor<Sh3AvatarFallbackInitials>;
        Sh3AvatarLayout: GlobalComponentConstructor<Sh3AvatarLayout>;
    }
}

export default { Sh3AvatarLayout, Sh3AvatarFallbackInitials };
