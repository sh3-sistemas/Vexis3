// This can be directly added to any of your `.ts` files like `router.ts`
// It can also be added to a `.d.ts` file. Make sure it's included in
// project's tsconfig.json "files"
import type { CustomIcon } from "@/types";
import type { MenuItem } from "primevue/menuitem";
import "vue-router";

// To ensure it is treated as a module, add at least one `export` statement
export {};

declare module "vue-router" {
  interface RouteMeta {
    // must be declared by every route
    breadCrumb: Array<MenuItem>;
    title?: string;
    label?: string;
    icon?: CustomIcon;
    isTab?: boolean;
  }
}
