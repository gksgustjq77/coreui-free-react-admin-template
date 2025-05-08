export type NotificationsType = {
  message: string
  color?: string
  show: boolean
  onClose?: () => void
}

export const notificationsStatus = {
  message: '',
  color: 'primary',
  show: false,
  onClose: undefined,
}
