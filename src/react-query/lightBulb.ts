import { useMutation, useQuery } from '@tanstack/react-query'
import axiosInstance from 'src/service/axiosInstance'
import { LightBulbQueryParamType } from 'src/type/lightBulb/LightBulb'

export const uselightBulbControll = <T>() => {
  return useMutation<T, Error, LightBulbQueryParamType>({
    mutationFn: async ({ deviceId, brightness }: LightBulbQueryParamType) => {
      const url = `/api/plugins/telemetry/DEVICE/${deviceId}/SERVER_SCOPE`
      const params = { brightness }

      return await axiosInstance.post(url, params)
    },
  })
}
