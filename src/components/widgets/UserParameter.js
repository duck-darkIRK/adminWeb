import React from "react";
import {
  CRow,
  CCol,
  CWidgetStatsA,
} from "@coreui/react";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";
import { cilArrowBottom, cilArrowTop } from "@coreui/icons";
import { getDateFromOffset } from "../../util/date"

class UserParameter extends React.Component {
  getDefaultDate() {
    const date = []
    for (let i = -7; i <= 0; i++) {
      date.push(getDateFromOffset(i));
    }
    return date;
  }

  constructor(props) {
    super(props);
    this.state = {
      defaultValue: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
      defaultMonths: this.getDefaultDate(),
      defaultInstance: 0,
      defaultInstanceRate: 0,
    }
  }

  render() {
    return (
      <CRow>
        <CCol sm={3}>
          <CWidgetStatsA
            className="mb-4"
            color="primary"
            value={
              <>
                ${this.state.defaultInstance}{" "}
                <span className="fs-6 fw-normal">
                  (So với hôm qua: {this.state.defaultInstanceRate}%<CIcon icon={cilArrowTop} />)
                </span>
              </>
            }
            title="Online user"
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: "70px" }}
                data={{
                  labels: this.state.defaultMonths,
                  datasets: [
                    {
                      label: "Số người truy cập",
                      backgroundColor: "transparent",
                      borderColor: "rgba(255,255,255,.55)",
                      pointBackgroundColor: "#321fdb",
                      data: this.state.defaultValue,
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
        <CCol sm={3}>
          <CWidgetStatsA
            className="mb-4"
            color="info"
            value={
              <>
                ${this.state.defaultInstance}{" "}
                <span className="fs-6 fw-normal">
                  (So với hôm qua: {this.state.defaultInstanceRate}%<CIcon icon={cilArrowTop} />)
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
                      label: "My First dataset",
                      backgroundColor: "transparent",
                      borderColor: "rgba(255,255,255,.55)",
                      pointBackgroundColor: "#39f",
                      data: this.state.defaultValue,
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
        <CCol sm={3}>
          <CWidgetStatsA
            className="mb-4"
            color="warning"
            value={
              <>
                ${this.state.defaultInstance}{" "}
                <span className="fs-6 fw-normal">
                  (So với hôm qua: {this.state.defaultInstanceRate}%<CIcon icon={cilArrowTop} />)
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
                      label: "My First dataset",
                      backgroundColor: "rgba(255,255,255,.2)",
                      borderColor: "rgba(255,255,255,.55)",
                      data: this.state.defaultValue,
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
        <CCol sm={3}>
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
        </CCol>
      </CRow>
    );
  }
}

export default UserParameter;
