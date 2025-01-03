import type { VNode } from "vue";

export interface Sh3AppBaseSidebarSlots {
  /**
   * Default header slot.
   */
  "side-header"(): VNode[];
  /**
   * Default footer slot.
   */
  "side-footer"(): VNode[];
}
