import DynamicDialog from "primevue/dynamicdialog";
import Sh3ConfirmDialog from "./Sh3ConfirmDialog.vue";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { useDialog } from "primevue/usedialog";

import * as DialogUtils from "./utils";
export * from "./types";

export {
  DynamicDialog,
  Sh3ConfirmDialog,
  useConfirm,
  useDialog,
  useToast,
  DialogUtils,
};
