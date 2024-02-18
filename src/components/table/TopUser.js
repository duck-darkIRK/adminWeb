import React from 'react'
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifFr,
  cifIn,
  cifUs,
  cilPeople,
  cilUser,
  cilUserFemale,
  cibGoogle,
  cibFacebook,
  cibTwitter,
  cibLinkedin
} from '@coreui/icons'


class TopUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progressGroup1: [
        { title: 'Monday', value1: 34, value2: 78 },
        { title: 'Tuesday', value1: 56, value2: 94 },
        { title: 'Wednesday', value1: 12, value2: 67 },
        { title: 'Thursday', value1: 43, value2: 91 },
        { title: 'Friday', value1: 22, value2: 73 },
        { title: 'Saturday', value1: 53, value2: 82 },
        { title: 'Sunday', value1: 9, value2: 69 },
      ],
      progressGroup2: [
        { title: 'Male', icon: cilUser, value: 53 },
        { title: 'Female', icon: cilUserFemale, value: 43 },
      ],
      progressGroup3: [
        { title: 'Minor', detail: '(Under 18)', percent: 56, value: '0' },
        { title: 'Young adult', detail: '(18~39)', percent: 15, value: '0' },
        { title: 'Middle-aged adult', detail: '(40~64)', percent: 11, value: '0' },
        { title: 'Senior citizen', detail: '(Over 65)', percent: 8, value: '0' },
      ]
    }
  }

  render() {
    return (
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Used duration and target users</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">
                          NewPost
                        </div>
                        <div className="fs-5 fw-semibold">0</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          View
                        </div>
                        <div className="fs-5 fw-semibold">0</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {this.state.progressGroup1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">
                          {item.title}
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Poster
                        </div>
                        <div className="fs-5 fw-semibold">0</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Area - Country
                        </div>
                        <div className="fs-5 fw-semibold">0</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {this.state.progressGroup2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}%
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {this.state.progressGroup3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        {/* <CIcon className="me-2" icon={item.icon} size="lg" /> */}
                        <span style={{fontWeight: 600}}>{item.title}</span><span>{item.detail}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{" "}
                          <span className="text-medium-emphasis small">
                            ({item.percent}%)
                          </span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    );
  }
}


export default TopUser;