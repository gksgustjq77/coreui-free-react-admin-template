import { CButton, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'
import { convertTimestampToKoreanHalf } from 'src/utill/converter'
import { CChartBar } from '@coreui/react-chartjs'

interface CardProps {
  props: any
  handleDataStatus: (status: string) => void
  inputStatus: string
}

const BarChart: React.FC<CardProps> = ({ props, handleDataStatus, inputStatus }) => {
  const sensorNames = Object.keys(props)
  const firstSensor = sensorNames[0]
  const currentDay = convertTimestampToKoreanHalf(props[firstSensor][0]?.ts) || ''

  const labels = props[firstSensor]
    .map((entry: { ts: number }) => convertTimestampToKoreanHalf(entry.ts))
    .filter((e: { time: number }) => e.time)
    .map((e: { time: number }) => e.time)

  const charData = sensorNames.map((name) => ({
    label: name,
    data: props[name].map((e: { value: string }) => e.value),
  }))

  return (
    <>
      <CCol xs={12}>
        <CCard className="d-flex">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            Sensor Chart {currentDay?.yearMonthDay}
            <div>
              <CButton
                as="input"
                type="button"
                color={inputStatus === 'AVG' ? 'light' : 'dark'}
                value="AVG"
                onClick={() => handleDataStatus('AVG')}
              />
              <CButton
                as="input"
                type="button"
                color={inputStatus === 'ALL' ? 'light' : 'dark'}
                value="ALL"
                onClick={() => handleDataStatus('ALL')}
              />
            </div>
          </CCardHeader>
          <CCardBody>
            <div>
              <CChartBar
                data={{
                  labels: labels,
                  datasets: charData,
                }}
                options={{
                  scales: {
                    y: {
                      ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                      },
                    },
                    x: {
                      ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                      },
                    },
                  },
                }}
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default BarChart
