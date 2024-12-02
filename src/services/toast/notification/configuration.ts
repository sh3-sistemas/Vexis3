import type { NotificationConfiguration, NotificationType } from "./types";
export default {
  success: {
    colors: "text-jade-500 bg-jade-200 rounded-lg",
    hover: "hover:bg-jade-300",
    box: "bg-jade-100 text-jade-950",
    icon: "heroicons-solid:check",
  },
  info: {
    colors: "text-primary-500 bg-primary-200 rounded-lg",
    hover: "hover:bg-primary-300",
    box: "bg-primary-100 text-primary-950",
    icon: "heroicons-solid:information-circle",
  },
  warning: {
    colors: "text-sulfur-500 bg-sulfur-200 rounded-lg",
    hover: "hover:bg-sulfur-300",
    box: "bg-sulfur-100 text-sulfur-950",
    icon: "heroicons-solid:exclamation-triangle",
  },
  error: {
    colors: "text-ruby-500 bg-ruby-200 rounded-lg",
    hover: "hover:bg-ruby-300",
    box: "bg-ruby-100 text-ruby-950",
    icon: "heroicons-solid:shield-exclamation",
  },
} as Record<NotificationType, NotificationConfiguration>;
