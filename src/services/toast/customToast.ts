import { useToast } from "vue-toastification";
import NotificationToast from "./notification/NotificationToast.vue";
import type { NotificationType } from "./notification/types";

const toast = useToast();

const defaultToast = (type: NotificationType, message: string) => {
  return {
    component: NotificationToast,
    props: {
      message,
      notificationType: type,
    },
  };
};

export const customToast = {
  info: (message: string) => {
    toast.info(defaultToast("info", message));
  },
  success: (message: string) => {
    toast.success(defaultToast("success", message));
  },
  error: (message: string) => {
    toast.error(defaultToast("error", message));
  },
  warning: (message: string) => {
    toast.warning(defaultToast("warning", message));
  },
};
