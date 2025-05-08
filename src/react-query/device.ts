import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import axiosInstance from 'src/service/axiosInstance'
import {
  DeviceQueryParamType,
  DeviceSampleKey,
  DeviceSampleList,
  DeviceValueType,
} from 'src/type/device/DeviceType'

const DeviceQueryKey = 'deivceQueryKey'

export const useDeviceKey = <T>(DeviceQueryParam: DeviceQueryParamType) => {
  return useQuery({
    queryKey: [
      DeviceQueryKey,
      DeviceQueryParam.keys,
      DeviceQueryParam.startTs,
      DeviceQueryParam.endTs,
    ],
    queryFn: async () => {
      return (await axiosInstance.get(
        `http://hejdev1.goqual.com:8080/api/plugins/telemetry/DEVICE/${DeviceQueryParam.keys}/keys/timeseries`,
        {
          params: {
            keys: DeviceQueryParam.keys,
          },
        },
      )) as Array<T>
    },
  })
}

const DeviceValueQueryKey = 'deviceValueQueryKey'

export const useDeviceValue = <T>(DeviceQueryParam: DeviceQueryParamType) => {
  return useQuery<DeviceValueType>({
    queryKey: [
      DeviceValueQueryKey,
      DeviceQueryParam.keys,
      DeviceQueryParam.startTs,
      DeviceQueryParam.endTs,
      DeviceQueryParam.interval,
    ],
    queryFn: async () => {
      return await axiosInstance.get(
        `http://hejdev1.goqual.com:8080/api/plugins/telemetry/DEVICE/${DeviceQueryParam.keys}/values/timeseries`,
        {
          params: {
            keys: DeviceSampleList.join(','),
            startTs: DeviceQueryParam.startTs,
            endTs: DeviceQueryParam.endTs,
            // agg: 'AVG',
            interval: DeviceQueryParam.interval,
          },
        },
      )
    },
  })
}
