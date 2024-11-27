import { customToast as toast } from '@/services/toast/customToast';
import type { ErrorResponse } from '@apollo/client/link/error'

export const unauthorizedError = (error: ErrorResponse) => {
  if (!error.response) return

  const { errors } = error.response
  const unauthorized = errors?.some((error) => error.message == 'Unauthorized')
  // TODO: Create redirect logic to logout/set logged as false
  if (unauthorized) toast.error('Usuário não autorizado.')
}

export const unauthenticatedError = (error: ErrorResponse) => {
  if (!error.response) return

  const { errors } = error.response
  const errorMessages = errors?.map((error) => error.extensions?.debugMessage)

  errorMessages?.forEach((errorMessage) => {
    if (!errorMessage) return
    toast.error(errorMessage as string)
  })
}
