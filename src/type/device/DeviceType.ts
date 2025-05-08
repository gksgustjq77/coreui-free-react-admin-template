import { cilBatteryFull, cilRain, cilLeaf, cilCloud } from '@coreui/icons'

export const DeviceSampleKey = 'e6d8ace0-1b87-11f0-b556-e7ea660b8ad9'
export const DeviceSampleList = ['wh40batt', 'baromrelin', 'soilad1', 'rainratein']
const now = Date.now()

export type DeviceQueryParamType = {
  keys: string
  startTs: number
  endTs: number
  interval: number
}
export const DeviceQueryParam: DeviceQueryParamType = {
  keys: DeviceSampleKey,
  startTs: now - 10 * 60 * 1000,
  endTs: now,
  interval: 60000,
}

export type DeviceValueType = {
  [key: string]: { ts: number; value: string }[]
}

export type ConverterDivceType = {
  title: string
  icon: string
  color: string
  value?: any
  time?: number
}

export const iconMap: Record<string, any> = {
  wh40batt: cilBatteryFull,
  baromrelin: cilCloud,
  soilad1: cilLeaf,
  rainratein: cilRain,
}

export const colorMap: Record<string, string> = {
  wh40batt: 'primary',
  baromrelin: 'danger',
  soilad1: 'warning',
  rainratein: 'warning',
}
