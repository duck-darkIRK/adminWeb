import React from "react";
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { LoginAsync, LoginDto, getUserDataByIdAsync, getAllUserAsync } from '../webAdmin.ts'
import { Navigate } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      finished: false,
    };
  }

  async login(email, password) {
    try{
      const dto = new LoginDto(email, password);
      const Login = await LoginAsync(dto);
      console.log(Login)
      if(Login.id){
        document.cookie = `access_token= ${Login.accessToken};`
        document.cookie = `refresh_token= ${Login.refreshToken};`
        document.cookie = `id= ${Login.id};`
        this.setState({finished: true});
      }
    } catch(error) {
      return false;
    }
  }

  render() {
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">
                        Sign In to your account
                      </p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
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
                            this.setState({ password: e.target.value });
                          }}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={() => {
                              this.login(this.state.email, this.state.password);
                            }}
                          >
                            Login
                          </CButton>
                        </CCol>
                        {/* <CCol xs={6} className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol> */}
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard
                  className="text-white bg-primary py-5"
                  style={{ width: "44%" }}
                >
                  <CCardBody className="text-center">
                    <div>
                      <h2>WELCOME</h2>
                      <p>Welcome back admin</p>
                      <p>
                        In case you are an admin but do not have an account,
                        please contact the company's management department
                      </p>
                      {/* <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>
                          Register Now!
                        </CButton>
                      </Link> */}
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
        {this.state.finished && <Navigate to="/dashboard" replace />}
      </div>
    );
  }
}

export default Login;
