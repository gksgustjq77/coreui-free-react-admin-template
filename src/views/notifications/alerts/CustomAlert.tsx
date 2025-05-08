import React from 'react'
import { CAlert } from '@coreui/react'
import { NotificationsType } from 'src/type/common/notifications'

const CustomAlert: React.FC<NotificationsType> = ({
  message,
  color = 'primary',
  show,
  onClose,
}) => {
  if (!show) return null

  return (
    <CAlert color={color} dismissible onClose={onClose}>
      {message}
    </CAlert>
  )
}

export default CustomAlert
