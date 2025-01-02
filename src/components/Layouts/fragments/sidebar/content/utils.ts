import type { TabMenuItem } from "@/components/Sidebars/fragments/types";
import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";

export const isActive = (
  route: RouteLocationNormalizedLoadedGeneric,
  current: TabMenuItem,
) => {
  return (
    current.key.includes(route?.name?.toString() ?? "") ||
    current.key == route.name
  );
};
