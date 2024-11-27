import { customToast as toast } from '@/services/toast/customToast';
import type { ErrorResponse } from '@apollo/client/link/error'

export const networkError = (error: ErrorResponse) => {
  if (!error.networkError) return

  toast.error('Erro de conexão com o servidor.')
}
