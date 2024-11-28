import type { NotificationConfiguration, NotificationType } from "./types";
export default {
  success: {
    colors: "text-grass-500 bg-grass-200 rounded-lg",
    hover: "hover:bg-grass-300",
    box: "bg-grass-100 text-grass-950",
    icon: "heroicons-solid:check",
  },
  info: {
    colors: "text-selenium-500 bg-selenium-200 rounded-lg",
    hover: "hover:bg-selenium-300",
    box: "bg-selenium-100 text-selenium-950",
    icon: "heroicons-solid:information-circle",
  },
  warning: {
    colors: "text-amber-500 bg-amber-200 rounded-lg",
    hover: "hover:bg-amber-300",
    box: "bg-amber-100 text-amber-950",
    icon: "heroicons-solid:exclamation-triangle",
  },
  error: {
    colors: "text-red-500 bg-red-200 rounded-lg",
    hover: "hover:bg-red-300",
    box: "bg-red-100 text-red-950",
    icon: "heroicons-solid:shield-exclamation",
  },
} as Record<NotificationType, NotificationConfiguration>;
