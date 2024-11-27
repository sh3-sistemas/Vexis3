import { toRefs } from 'vue'
import { customToast as toast } from '@/services/toast/customToast';
import { logErrorMessages } from '@vue/apollo-util'
import { useMutation } from '@vue/apollo-composable'
import { CRUD_EVENTS, type CrudEventKey, type UseCrudEmits, type UseCrudProps } from './types'
import type { ApolloError } from '@apollo/client'


export default function useCrud<T>(props: UseCrudProps<T>, emits: UseCrudEmits) {
  const { crud, clientId, onDoneCallback, toastResponse } = toRefs(props)

  const {
    mutate: mutateCreate,
    onDone: onDoneCreate,
    onError: onErrorCreate
  } = useMutation(crud.value?.create, { clientId: clientId.value })
  const {
    mutate: mutateUpdate,
    onDone: onDoneUpdate,
    onError: onErrorUpdate
  } = useMutation(crud.value?.update, { clientId: clientId.value })
  const {
    mutate: mutateDeletion,
    onDone: onDoneDeletion,
    onError: onErrorDeletion
  } = useMutation(crud.value?.delete, { clientId: clientId.value })

  const onDone = (event: CrudEventKey, response: object) => {
    if (toastResponse.value.enable) {
      const toastMessage = CRUD_EVENTS[event]
      toast.success(toastResponse.value[toastMessage] ?? '')
    }

    emits(event, response)
    if (onDoneCallback?.value) onDoneCallback.value(event, response)
  }

  const onError = (error: ApolloError) => {
    if (import.meta.env.NODE_ENV !== 'production') {
      logErrorMessages(error)
    }
  }

  onDoneCreate((response) => onDone('onCreate', response))
  onDoneUpdate((response) => onDone('onUpdate', response))
  onDoneDeletion((response) => onDone('onDelete', response))

  onErrorUpdate((error) => onError(error))
  onErrorCreate((error) => onError(error))
  onErrorDeletion((error) => onError(error))

  return { mutateCreate, mutateDeletion, mutateUpdate }
}
