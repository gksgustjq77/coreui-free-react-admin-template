export const DeviceSampleKey = 'e6d8ace0-1b87-11f0-b556-e7ea660b8ad9'

export type LightBulbQueryParamType = {
  deviceId: string
  brightness: number
}

export const LightBulbQueryParam: LightBulbQueryParamType = {
  deviceId: DeviceSampleKey,
  brightness: 0,
}
