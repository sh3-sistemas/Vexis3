import type { TabMenuItem } from "@/components/Sidebars/fragments/types";
import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";

export const isActive = (
  route: RouteLocationNormalizedLoadedGeneric,
  current: TabMenuItem,
) => {
  const matched = route.matched.map((x) => x.name);
  return (
    current.key.includes(route?.name?.toString() ?? "") ||
    matched.includes(current.key) ||
    current.key == route.name
  );
};

export const getCookie = (cname: string) => {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
