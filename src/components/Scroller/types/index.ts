/**
 * @module scroll
 */
import type { DefineComponent } from "vue";
/**
 * Defines valid properties in HorizontalScroller component.
 */
export type HorizontalScrollerProps = {
  buttonStyle?: string;
  containerStyle?: string;
  iconStyle?: string;
  mainContainerId: string;
  scrollSize?: number;
};

declare module "vue" {
  export interface GlobalComponents {
    Sh3HorizontalScroller: DefineComponent<HorizontalScrollerProps, {}, {}>;
  }
}
