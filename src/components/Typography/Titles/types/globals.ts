import type { DefineComponent } from "vue";
import type { HightlightTitleProps } from ".";

declare module "vue" {
  export interface GlobalComponents {
    HighlightTitle: DefineComponent<HightlightTitleProps, any, any>;
    SecondTitle: DefineComponent<any, any, any>;
    SectionTitle: DefineComponent<any, any, any>;
  }
}
