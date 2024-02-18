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
import { getCookie, makeRequest } from "../../util/makeRequest.js";
import { getAllPostAsync, getAllUserAsync } from "../../webAdmin.ts";

class TopUser extends React.Component {

  calculateAge = (dateOfBirth) => {
    var dobDate = new Date(dateOfBirth);
    var currentDate = new Date();
    var ageDifference = currentDate.getFullYear() - dobDate.getFullYear();

    var hasBirthdayPassed = (currentDate.getMonth() > dobDate.getMonth()) ||
      (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() >= dobDate.getDate());
    if (!hasBirthdayPassed) {
      ageDifference--;
    }

    return ageDifference;
  }

  componentDidMount() {
    const UserHandle = async () => {
      let dataGlobalUser = [];
      let tmpProgressGroup3 = {
        "Minor" : 0,
        "Young adult": 0,
        "Middle-aged adult": 0,
        "Senior citizen": 0
      }
      let tmpDataPost= {
        newPost: 0,
        comment: 0,
        like: 0,
        Poster: 0,
        Area: 0
      }

      makeRequest(getAllUserAsync, getCookie("id"))
        .then((data) => {
          dataGlobalUser = data;
          for (let i = 0; i < dataGlobalUser.length; i++) {
            let tmpAge = this.calculateAge(dataGlobalUser[i].detail.birthday)
            if (tmpAge < 18) {
              tmpProgressGroup3["Minor"] += 1;
            }
            else if (tmpAge >= 18 && tmpAge <= 39) {
              tmpProgressGroup3["Young adult"] += 1;
            }
            else if (tmpAge > 39 && tmpAge <= 64) {
              tmpProgressGroup3["Middle-aged adult"] += 1;
            }
            else if (tmpAge > 64) {
              tmpProgressGroup3["Senior citizen"] += 1;
            }
          }
          let totalUsers = dataGlobalUser.length;
          let perCentMinor = Math.floor((tmpProgressGroup3["Minor"] / totalUsers) * 100);
          let perCentYoung = Math.floor((tmpProgressGroup3["Young adult"] / totalUsers) * 100);
          let perCentMiddle = Math.floor((tmpProgressGroup3["Middle-aged adult"] / totalUsers) * 100);
          let perCentSenior = Math.floor((tmpProgressGroup3["Senior citizen"] / totalUsers) * 100);

          
          this.setState({progressGroup3: [
            { title: 'Minor', detail: '(Under 18)', percent: perCentMinor, value: `${tmpProgressGroup3["Minor"]}` },
            { title: 'Young adult', detail: '(18~39)', percent: perCentYoung, value: `${tmpProgressGroup3["Young adult"]}` },
            { title: 'Middle-aged adult', detail: '(40~64)', percent: perCentMiddle, value: `${tmpProgressGroup3["Middle-aged adult"]}` },
            { title: 'Senior citizen', detail: '(Over 65)', percent: perCentSenior, value: `${tmpProgressGroup3["Senior citizen"]}` },
          ]})


          const uniqueArea = [...new Set(data.map(item => item.detail.countryCode))];
          tmpDataPost.Area = uniqueArea.length;
        })
        .catch((error) => alert(error))

      makeRequest(getAllPostAsync, getCookie("id"))
        .then((data) => {
          let validatePost = data.filter(item => item.isDisplay === true);
          tmpDataPost.newPost = validatePost.length;
          const uniqueUser = [...new Set(data.map(item => item.ownerUserId))];
          let tmpPosterDetail = {"male": 0, "female": 0, "other": 0}
          for (let i = 0; i < uniqueUser.length; i++) {
            let countIndex = dataGlobalUser.findIndex(user => user.id === uniqueUser[i]);
            if (countIndex === -1) continue;
            if (dataGlobalUser[countIndex].detail.gender === "male") {
              tmpPosterDetail["male"] += 1;
            }
            else if (dataGlobalUser[countIndex].detail.gender === "female") {
              tmpPosterDetail["female"] += 1;
            }
            else if (dataGlobalUser[countIndex].detail.gender === "other") {
              tmpPosterDetail["other"] += 1;
            }
          }
          let totalPoster = uniqueUser.length;
          let perCentMale = Math.floor((tmpPosterDetail["male"] / totalPoster) * 100);
          let perCentFemale = Math.floor((tmpPosterDetail["female"] / totalPoster) * 100);
          let perCentOther = Math.floor((tmpPosterDetail["other"] / totalPoster) * 100);
          this.setState({ progressGroup2: [
            { title: 'Male', icon: cilUser, value: perCentMale },
            { title: 'Female', icon: cilUserFemale, value: perCentFemale },
            { title: 'Other', icon: cilUser, value: perCentOther },
          ],})
          tmpDataPost.Poster =  uniqueUser.length;
          let tmpCountLike = 0;
          let tmpCountComment = 0;
          let tmpProgressGroup1 = [
            { title: 'Sunday', value1: 0, value2: 0, value3: 0 },
            { title: 'Monday', value1: 0, value2: 0, value3: 0 },
            { title: 'Tuesday', value1: 0, value2: 0, value3: 0 },
            { title: 'Wednesday', value1: 0, value2: 0, value3: 0 },
            { title: 'Thursday', value1: 0, value2: 0, value3: 0 },
            { title: 'Friday', value1: 0, value2: 0, value3: 0 },
            { title: 'Saturday', value1: 0, value2: 0, value3: 0 },
          ]
          for (let i = 0; i < validatePost.length; i++) {
            let postDate = new Date(validatePost[i].created_at);
            let postDay = postDate.getDay();
            console.log(postDay)
            tmpProgressGroup1[postDay].value1++;

            let validateComment = validatePost[i].comment.filter(item => item.isDisplay === true);
            for (let j = 0; j < validateComment.length; j++) {
              postDate = new Date(validateComment[j].created_at);
              postDay = postDate.getDay();
              tmpProgressGroup1[postDay].value2++;
            }

            let validateLike = validatePost[i].interaction.filter(item => item.isDisplay === true);
            for (let j = 0; j < validateLike.length; j++) {
              postDate = new Date(validateLike[j].created_at);
              postDay = postDate.getDay();
              tmpProgressGroup1[postDay].value3++;
            }
            tmpCountLike += validateLike.length;
            tmpCountComment += validateComment.length;
          }

          tmpDataPost.like = tmpCountLike;
          tmpDataPost.comment = tmpCountComment;
          this.setState({dataPost: tmpDataPost})
          this.setState({progressGroup1: tmpProgressGroup1})
        })
        .catch((error) => alert(error))
      

    }
    UserHandle()
  }

  constructor(props) {
    super(props)
    this.state = {
      dataPost: {
        newPost: 0,
        comment: 0,
        like: 0,
        Poster: 0,
        Area: 0
      },
      progressGroup1: [
        { title: 'Sunday', value1: 0, value2: 0, value3: 0 },
        { title: 'Monday', value1: 0, value2: 0, value3: 0 },
        { title: 'Tuesday', value1: 0, value2: 0, value3: 0 },
        { title: 'Wednesday', value1: 0, value2: 0, value3: 0 },
        { title: 'Thursday', value1: 0, value2: 0, value3: 0 },
        { title: 'Friday', value1: 0, value2: 0, value3: 0 },
        { title: 'Saturday', value1: 0, value2: 0, value3: 0 },
      ],
      progressGroup2: [
        { title: 'Male', icon: cilUser, value: 0 },
        { title: 'Female', icon: cilUserFemale, value: 0 },
        { title: 'Other', icon: cilUser, value: 0 },
      ],
      progressGroup3: [
        { title: 'Minor', detail: '(Under 18)', percent: 0, value: '0' },
        { title: 'Young adult', detail: '(18~39)', percent: 0, value: '0' },
        { title: 'Middle-aged adult', detail: '(40~64)', percent: 0, value: '0' },
        { title: 'Senior citizen', detail: '(Over 65)', percent: 0, value: '0' },
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
                    <CCol>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">
                          NewPost
                        </div>
                        <div className="fs-5 fw-semibold">{this.state.dataPost.newPost}</div>
                      </div>
                    </CCol>
                    <CCol>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Like
                        </div>
                        <div className="fs-5 fw-semibold">{this.state.dataPost.like}</div>
                      </div>
                    </CCol>
                    <CCol>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Comment
                        </div>
                        <div className="fs-5 fw-semibold">{this.state.dataPost.comment}</div>
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
                        <CProgress thin color="success" value={item.value3} />
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
                        <div className="fs-5 fw-semibold">{this.state.dataPost.Poster}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">
                          Area - Country
                        </div>
                        <div className="fs-5 fw-semibold">{this.state.dataPost.Poster}</div>
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
                        <span style={{ fontWeight: 600 }}>{item.title}</span><span>{item.detail}</span>
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