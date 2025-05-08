import React, { useEffect, useState } from 'react'
import CustomCard from 'src/components/card/CustomCard'
import BarChart from 'src/components/chart/BarChart'
import { useDeviceKey, useDeviceValue } from 'src/react-query/device'
import {
  ConverterDivceType,
  DeviceQueryParam,
  DeviceSampleList,
  DeviceValueType,
  colorMap,
  iconMap,
} from 'src/type/device/DeviceType'

const SampleDashboard: React.FC = () => {
  const [propsData, setPropsData] = useState<ConverterDivceType[]>([])
  const [groupedDeviceStatus, setGroupedDeviceStatus] = useState<DeviceValueType>({})
  const [dataStatus, setDataStatus] = useState<string>('AVG')
  const { data } = useDeviceKey(DeviceQueryParam)
  const { data: deviceStatus } = useDeviceValue<DeviceValueType>(DeviceQueryParam)

  const groupByAvg = (data: DeviceValueType): DeviceValueType => {
    const result: DeviceValueType = {}

    for (const key in data) {
      const grouped: Record<number, number[]> = {}

      data[key].forEach(({ ts, value }) => {
        const minuteKey = Math.floor(ts / 60000) * 60000
        if (!grouped[minuteKey]) grouped[minuteKey] = []
        grouped[minuteKey].push(parseFloat(value))

        result[key] = Object.entries(grouped).map(([ts, values]) => ({
          ts: Number(ts),
          value: (values.reduce((sum, v) => sum + v, 0) / values.length).toFixed(2),
        }))
      })
    }

    return result
  }

  const handleDataStatus = (status: string) => {
    setDataStatus(status)
  }

  useEffect(() => {
    if (!data || !deviceStatus) return

    const filterData = DeviceSampleList.filter((key) => (data as string[]).includes(key))

    const ConverterObj = filterData?.map((item) => {
      return {
        title: item,
        icon: iconMap[item],
        value: deviceStatus?.[item]?.at(-1)?.value ?? null,
        time: deviceStatus?.[item]?.at(-1)?.ts ?? undefined,
        color: colorMap[item],
      }
    }) as ConverterDivceType[]

    setPropsData(ConverterObj)

    if (dataStatus === 'AVG') {
      setGroupedDeviceStatus(groupByAvg(deviceStatus))
    } else {
      setGroupedDeviceStatus(deviceStatus)
    }
  }, [data, deviceStatus, dataStatus])

  return (
    <>
      {propsData.length > 0 && (
        <>
          <CustomCard props={propsData} />
          <BarChart
            props={dataStatus === 'AVG' ? groupedDeviceStatus : deviceStatus}
            handleDataStatus={handleDataStatus}
            inputStatus={dataStatus}
          />
        </>
      )}
    </>
  )
}

export default SampleDashboard
