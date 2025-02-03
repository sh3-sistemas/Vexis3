/**
 * @module scroll
 */
import type { DefineComponent } from "vue";
/**
 * Defines valid properties in HorizontalScroller component.
 */
export type HorizontalScrollerProps = {
  buttonStyle: string;
  iconStyle: string;
  mainContainerId: string;
  scrollContainerId: string;
  scrollSize: number;
};

declare module "vue" {
  export interface GlobalComponents {
    Sh3HorizontalScroller: DefineComponent<HorizontalScrollerProps, {}, {}>;
  }
}
