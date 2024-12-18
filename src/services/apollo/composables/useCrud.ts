import { inject, toRefs } from "vue";
import { customToast as toast } from "@/services/toast/customToast";
import { logErrorMessages } from "@vue/apollo-util";
import { provideApolloClients, useMutation } from "@vue/apollo-composable";
import {
  CRUD_EVENTS,
  type CrudEventKey,
  type UseCrudEmits,
  type UseCrudProps,
} from "./types";
import type { ApolloError } from "@apollo/client";
import type { ClientDict } from "../types";

/**
 *
 * @param props
 * @param emits
 */
export default function useCrud<T>(
  props: UseCrudProps<T>,
  emits: UseCrudEmits,
) {
  const clients = inject<ClientDict<T>>("clients") as ClientDict<T>;
  const { crud, clientId, onDoneCallback, toastResponse } = toRefs(props);

  const {
    mutate: mutateCreate,
    onDone: onDoneCreate,
    onError: onErrorCreate,
  } = provideApolloClients(clients)(() =>
    useMutation(crud.value?.create, { clientId: clientId.value }),
  );
  const {
    mutate: mutateUpdate,
    onDone: onDoneUpdate,
    onError: onErrorUpdate,
  } = provideApolloClients(clients)(() =>
    useMutation(crud.value?.update, { clientId: clientId.value }),
  );
  const {
    mutate: mutateDeletion,
    onDone: onDoneDeletion,
    onError: onErrorDeletion,
  } = provideApolloClients(clients)(() =>
    useMutation(crud.value?.delete, { clientId: clientId.value }),
  );

  const onDone = (event: CrudEventKey, response: object) => {
    if (toastResponse.value.enable) {
      const toastMessage = CRUD_EVENTS[event];
      toast.success(toastResponse.value[toastMessage] ?? "");
    }

    emits(event, response);
    if (onDoneCallback?.value) onDoneCallback.value(event, response);
  };

  const onError = (error: ApolloError) => {
    if (import.meta.env.NODE_ENV !== "production") {
      logErrorMessages(error);
    }
  };

  onDoneCreate((response) => onDone("onCreate", response));
  onDoneUpdate((response) => onDone("onUpdate", response));
  onDoneDeletion((response) => onDone("onDelete", response));

  onErrorUpdate((error) => onError(error));
  onErrorCreate((error) => onError(error));
  onErrorDeletion((error) => onError(error));

  return { mutateCreate, mutateDeletion, mutateUpdate };
}
