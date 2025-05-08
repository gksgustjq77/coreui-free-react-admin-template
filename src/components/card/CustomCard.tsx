import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCardHeader, CCardText, CCol, CRow } from '@coreui/react'
import { ConverterDivceType } from 'src/type/device/DeviceType'
import { convertTimestampToKorean } from 'src/utill/converter'
interface CardProps {
  props: ConverterDivceType[]
}
const CustomCard: React.FC<CardProps> = ({ props }) => {
  return (
    <>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <small>Device Dashboard</small>
          </CCardHeader>
          <CCardBody>
            <CRow>
              {props.map((item, index) => (
                <CCol lg={3} key={index}>
                  <CCard className="mb-3 fw-semibold" color={item.color} textColor={'white'}>
                    <CCardHeader>{item.title}</CCardHeader>
                    <CCardBody>
                      <CIcon icon={item.icon} size="lg" className="me-2"></CIcon>

                      {/* <CCardTitle>{item.color} card title</CCardTitle> */}
                      <CCardText className="small">
                        latest time :<br /> {convertTimestampToKorean(item.time || 0)}
                      </CCardText>
                      <CCardText className="small">current value : {item.value}</CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
              ))}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default CustomCard
