import { atom } from 'jotai'
import { NotificationsType } from 'src/type/common/notifications'

export const notificationAtom = atom<NotificationsType>({
  message: '',
  color: '',
  show: false,
})
