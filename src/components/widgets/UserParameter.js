import React, { useState } from "react";
import {
  CRow,
  CCol,
  CWidgetStatsA,
} from "@coreui/react";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";
import { cilArrowBottom, cilArrowTop } from "@coreui/icons";
import { getDateFromOffset } from "../../util/date"
import { getCookie, makeRequest } from "../../util/makeRequest.js";
import { getAllPostAsync, getAllUserAsync, getUpAllRoomchatAsync } from "../../webAdmin.ts";

class UserParameter extends React.Component {
  getDefaultDate() {
    const date = []
    for (let i = -7; i <= 0; i++) {
      date.push(getDateFromOffset(i));
    }
    return date;
  }
  componentDidMount() {
    const UserHandle = async () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      makeRequest(getAllUserAsync, getCookie("id"))
        .then((data) => {
          let tmpNewUserData = [];
          for (let i = 8; i > 0; i--) {
            let tmpPreDate = new Date(today);
            tmpPreDate.setDate(today.getDate() - i);
            let tmpNextDate = new Date(today);
            tmpNextDate.setDate(today.getDate() - i + 1);
            tmpNewUserData.push(data.filter(item => new Date(item.created_at) >= tmpPreDate && new Date(item.created_at) <= tmpNextDate).length)
          }
          this.setState({ numberUserPerDay: tmpNewUserData })
        })
        .catch((error) => alert(error))

      makeRequest(getAllPostAsync, getCookie("id"))
        .then((data) => {
          let tmpNewPostData = [];
          for (let i = 8; i > 0; i--) {
            let tmpPreDate = new Date(today);
            tmpPreDate.setDate(today.getDate() - i);
            let tmpNextDate = new Date(today);
            tmpNextDate.setDate(today.getDate() - i + 1);
            tmpNewPostData.push(data.filter(item => new Date(item.created_at) >= tmpPreDate && new Date(item.created_at) <= tmpNextDate).length)
          }
          this.setState({ numberPostPerDay: tmpNewPostData })
        })
        .catch((error) => alert(error))
        makeRequest(getUpAllRoomchatAsync, getCookie("id"))
        .then((data) => {
          let tmpRoomchatData = [];
          for (let i = 8; i > 0; i--) {
            let tmpPreDate = new Date(today);
            tmpPreDate.setDate(today.getDate() - i);
            let tmpNextDate = new Date(today);
            tmpNextDate.setDate(today.getDate() - i + 1);
            tmpRoomchatData.push(data.filter(item => new Date(item.created_at) >= tmpPreDate && new Date(item.created_at) <= tmpNextDate).length)
          }
          this.setState({ numberGroupPerDay: tmpRoomchatData })
        })
        .catch((error) => alert(error))
    }
    UserHandle()
  }



  constructor(props) {
    super(props);
    this.state = {
      numberUserPerDay: [0, 0, 0, 0, 0, 0, 0, 0],
      numberPostPerDay: [0, 0, 0, 0, 0, 0, 0, 0],
      numberGroupPerDay: [0, 0, 0, 0, 0, 0, 0, 0],
      defaultValue: [50, 50, 50, 50, 50, 50, 50, 50],
      defaultMonths: this.getDefaultDate(),
      defaultInstance: 0,
      defaultInstanceRate: 0,
    }
  }


  render() {
    return (
      <CRow>
        <CCol sm={4}>
          <CWidgetStatsA
            className="mb-4"
            color="primary"
            value={
              <>
                ${this.state.numberUserPerDay[7]} {" "}
                <span className="fs-6 fw-normal">
                  {this.state.numberUserPerDay[7] >= this.state.numberUserPerDay[6] ? (
                    <>
                      So với hôm qua: {
                        this.state.numberUserPerDay[6] === 0 ? (Math.floor(this.state.numberUserPerDay[7] / (this.state.numberUserPerDay[6] + 1) * 100))
                          : (Math.floor(this.state.numberUserPerDay[7] / (this.state.numberUserPerDay[6]) * 100))
                      }%
                      <CIcon icon={cilArrowTop} />
                    </>
                  ) : (
                    <>
                      So với hôm qua: {
                        this.state.numberUserPerDay[7] === 0 ? (Math.floor(this.state.numberUserPerDay[6] / (this.state.numberUserPerDay[7] + 1) * 100))
                          : (Math.floor(this.state.numberUserPerDay[6] / (this.state.numberUserPerDay[7]) * 100))
                      }%
                      <CIcon icon={cilArrowBottom} />
                    </>
                  )}
                </span>
              </>

            }
            title="New user"
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: this.state.defaultMonths,
                  datasets: [
                    {
                      label: "Số người dùng mới",
                      backgroundColor: "transparent",
                      borderColor: "rgba(255,255,255,.55)",
                      pointBackgroundColor: "#321fdb",
                      data: this.state.numberUserPerDay
                    }
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: 0,
                      max: 100,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                      tension: 0.4,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
        <CCol sm={4}>
          <CWidgetStatsA
            className="mb-4"
            color="info"
            value={
              <>
                ${this.state.numberPostPerDay[7]} {" "}
                <span className="fs-6 fw-normal">
                  {this.state.numberPostPerDay[7] >= this.state.numberPostPerDay[6] ? (
                    <>
                      So với hôm qua: {
                        this.state.numberPostPerDay[6] === 0 ? (Math.floor(this.state.numberPostPerDay[7] / (this.state.numberPostPerDay[6] + 1) * 100))
                          : (Math.floor(this.state.numberPostPerDay[7] / (this.state.numberPostPerDay[6]) * 100))
                      }%
                      <CIcon icon={cilArrowTop} />
                    </>
                  ) : (
                    <>
                      So với hôm qua: {
                        this.state.numberPostPerDay[7] === 0 ? (Math.floor(this.state.numberPostPerDay[6] / (this.state.numberPostPerDay[7] + 1) * 100))
                          : (Math.floor(this.state.numberPostPerDay[6] / (this.state.numberPostPerDay[7]) * 100))
                      }%
                      <CIcon icon={cilArrowBottom} />
                    </>
                  )}
                </span>
              </>
            }
            title="Posts"
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: this.state.defaultMonths,
                  datasets: [
                    {
                      label: "Số bài đăng mới",
                      backgroundColor: "transparent",
                      borderColor: "rgba(255,255,255,.55)",
                      pointBackgroundColor: "#39f",
                      data: this.state.numberPostPerDay,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: 0,
                      max: 100,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
        <CCol sm={4}>
          <CWidgetStatsA
            className="mb-4"
            color="warning"
            value={
              <>
                ${this.state.numberGroupPerDay[7]} {" "}
                <span className="fs-6 fw-normal">
                  {this.state.numberGroupPerDay[7] >= this.state.numberGroupPerDay[6] ? (
                    <>
                      So với hôm qua: {
                        this.state.numberGroupPerDay[6] === 0 ? (Math.floor(this.state.numberGroupPerDay[7] / (this.state.numberGroupPerDay[6] + 1) * 100))
                          : (Math.floor(this.state.numberGroupPerDay[7] / (this.state.numberGroupPerDay[6]) * 100))
                      }%
                      <CIcon icon={cilArrowTop} />
                    </>
                  ) : (
                    <>
                      So với hôm qua: {
                        this.state.numberGroupPerDay[7] === 0 ? (Math.floor(this.state.numberGroupPerDay[6] / (this.state.numberGroupPerDay[7] + 1) * 100))
                          : (Math.floor(this.state.numberGroupPerDay[6] / (this.state.numberGroupPerDay[7]) * 100))
                      }%
                      <CIcon icon={cilArrowBottom} />
                    </>
                  )}
                </span>
              </>
            }
            title="Groups"
            chart={
              <CChartLine
                className="mt-3"
                style={{ height: "70px" }}
                data={{
                  labels: this.state.defaultMonths,
                  datasets: [
                    {
                      label: "Số nhóm chat mới",
                      backgroundColor: "rgba(255,255,255,.2)",
                      borderColor: "rgba(255,255,255,.55)",
                      data: this.state.numberGroupPerDay,
                      fill: true,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      display: false,
                    },
                    y: {
                      min: 0,
                      max: 100,
                      display: false,
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 2,
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
        {/* <CCol sm={3}>
          <CWidgetStatsA
            className="mb-4"
            color="danger"
            value={
              <>
                {this.state.defaultInstance}{" "}
                <span className="fs-6 fw-normal">
                  (So với hôm qua: {this.state.defaultInstanceRate}%<CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Reports"
            chart={
              <CChartBar
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: this.state.defaultMonths,
                  datasets: [
                    {
                      label: "My First dataset",
                      backgroundColor: "rgba(255,255,255,.2)",
                      borderColor: "rgba(255,255,255,.55)",
                      data: this.state.defaultValue,
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: 0,
                      max: 100,
                      grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            }
          />
        </CCol> */}
      </CRow>
    );
  }
}

export default UserParameter;
