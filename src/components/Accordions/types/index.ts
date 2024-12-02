/**
 *
 * Sh3Accordion is a Vue component.
 *
 * [Component](./Sh3Accordion.vue)
 *
 * @module accordions
 *
 */
import type { DefineComponent } from "vue";
/**
 * **SH3 - Sh3Accordion**
 *
 * _Sh3Accordion is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3Accordion.vue)
 * @group Component
 *
 */

export type AccordionItem = {
  title: string;
  links: Array<{
    tag: string;
    path: string;
  }>;
};

export interface Sh3PathAccordionProps {
  items: Array<AccordionItem>;
}

/**
 * **SH3 - Sh3PathAccordion**
 *
 * _Sh3PathAccordion is a Vue component._
 * --- ---
 * [Vue Based Component](./Sh3PathAccordion.vue)
 * @group Component
 *
 */

declare module "vue" {
  export interface GlobalComponents {
    Sh3Accordion: DefineComponent<any, any, any>;
    Sh3PathAccordion: DefineComponent<Sh3PathAccordionProps, any, any>;
  }
}
