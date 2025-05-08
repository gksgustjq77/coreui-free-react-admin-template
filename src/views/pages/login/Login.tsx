import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { LoginType, loginInfoStatus } from '../../../type/login/Login'
import CustomAlert from 'src/views/notifications/alerts/CustomAlert'
import { useAtom } from 'jotai'
import { notificationAtom } from 'src/atoms/notificationAtom'
import { useLogin } from 'src/react-query/user'

// interview@goqual.com
// 23af56ed
const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginType>(loginInfoStatus)
  const [alert, setAlert] = useAtom(notificationAtom)
  const loginMutaion = useLogin()

  const handleLoginInfoChange = (value: string, key: string) => {
    setLoginInfo((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleLoginSubmit = () => {
    loginMutaion.mutate(loginInfo)
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => {
                          handleLoginInfoChange(e.target.value as string, 'username')
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => {
                          handleLoginInfoChange(e.target.value as string, 'password')
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={handleLoginSubmit}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
            <CustomAlert
              {...alert}
              onClose={() => setAlert((prev) => ({ ...prev, show: false }))}
            ></CustomAlert>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
