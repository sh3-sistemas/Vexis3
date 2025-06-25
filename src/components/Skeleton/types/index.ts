/**
 * @module skeleton
 */
import type { DefineComponent } from "vue";
import type { SkeletonProps, SkeletonSlots, SkeletonEmits } from "primevue";

declare module "vue" {
  export interface GlobalComponents {
    Sh3Skeleton: DefineComponent<SkeletonProps, SkeletonSlots, SkeletonEmits>;
  }
}
