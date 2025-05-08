import { useMutation } from '@tanstack/react-query'
import { LoginType } from 'src/type/login/Login'
import { useNavigate } from 'react-router-dom'
import axiosInstance from 'src/service/axiosInstance'
import { notificationAtom } from 'src/atoms/notificationAtom'
import { useAtom } from 'jotai'

export const useLogin = <T>() => {
  const navigate = useNavigate()
  const [_, setAlert] = useAtom(notificationAtom)

  return useMutation<T, Error, LoginType>({
    mutationFn: async ({ username, password }: LoginType) => {
      return await axiosInstance.post('/api/auth/login', { username, password })
    },
    onSuccess: async () => {
      navigate('/dashboard')
    },
    onError: async (error: Error) => {
      setAlert({ message: error.message, show: true, color: 'danger' })
    },
  })
}
