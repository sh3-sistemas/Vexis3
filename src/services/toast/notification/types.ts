import { POSITION } from "vue-toastification"

export const toastOptions = {
    position: POSITION.BOTTOM_RIGHT,
    timeout: 4000,
    closeButton: false,
    hideProgressBar: true,
    icon: false
}

export type NotificationType =
    'info' |
    'success' |
    'error' |
    'warning'

export type NotificationConfiguration = {
    colors: string
    hover: string
    box: string
    icon: string
}