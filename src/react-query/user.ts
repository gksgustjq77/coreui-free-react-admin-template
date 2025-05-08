import { useMutation } from '@tanstack/react-query'
import { LoginType } from 'src/type/login/Login'
import { useNavigate } from 'react-router-dom'
import axiosInstance from 'src/service/axiosInstance'
import { notificationAtom } from 'src/atoms/notificationAtom'
import { useAtom } from 'jotai'

export const useLogin = () => {
  const navigate = useNavigate()
  const [alert, setAlert] = useAtom(notificationAtom)

  return useMutation({
    mutationFn: async ({ username, password }: LoginType) => {
      await axiosInstance.post('/api/auth/login', { username, password })
    },
    onSuccess: async () => {
      navigate('/dashboard')
    },
    onError: async (error: Error) => {
      setAlert({ message: error.message, show: true, color: 'danger' })
    },
  })
}
