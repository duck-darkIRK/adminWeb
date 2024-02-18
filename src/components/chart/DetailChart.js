import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { getDateFromOffset } from '../../util/date'

class DetailChart extends React.Component {
    randomData(max, min = 0){
        const data = []
        for (let i = 0; i < 12; i++) {
            data.push(Math.floor(Math.random() * (max - min + 1) + min))
        }
        return data
    }

    constructor(props) {
        super(props)
        this.state = {
            progressExample: [
                { title: 'Viewed post', value: 0 + ' posts', color: 'warning' },
                { title: 'Like', value: 0 + ' likes', color: 'success' },
                { title: 'Comment', value: 0 + ' comment', color: 'info' },
            ],
        }
    }

    render() {
        return (
            <CCard className="mb-4">
                <CCardBody>
                <CRow>
                    <CCol sm={4}>
                    <h4 id="traffic" className="card-title mb-0">
                        Traffic
                    </h4>
                    <div className="small text-medium-emphasis">{getDateFromOffset(-365)} to {getDateFromOffset()}</div>
                    </CCol>
                </CRow>
                <CChartLine
                    style={{ height: '300px', marginTop: '40px' }}
                    data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [
                        {
                        label: 'My First dataset',
                        backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                        borderColor: getStyle('--cui-info'),
                        pointHoverBackgroundColor: getStyle('--cui-info'),
                        borderWidth: 2,
                        data: this.randomData(300),
                        fill: true,
                        },
                        {
                        label: 'My Second dataset',
                        backgroundColor: 'transparent',
                        borderColor: getStyle('--cui-success'),
                        pointHoverBackgroundColor: getStyle('--cui-success'),
                        borderWidth: 2,
                        data: this.randomData(300),
                        },
                        {
                        label: 'My Third dataset',
                        backgroundColor: 'transparent',
                        borderColor: getStyle('--cui-warning'),
                        pointHoverBackgroundColor: getStyle('--cui-warning'),
                        borderWidth: 1,
                        borderDash: [8, 5],
                        data: this.randomData(300),
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
                            drawOnChartArea: false,
                        },
                        },
                        y: {
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250,
                        },
                        },
                    },
                    elements: {
                        line: {
                        tension: 0.4,
                        },
                        point: {
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 4,
                        hoverBorderWidth: 3,
                        },
                    },
                    }}
                />
                </CCardBody>
                <CCardFooter>
                <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="text-center">
                    {this.state.progressExample.map((item, index) => (
                    <CCol className="mb-sm-2 mb-0" key={index}>
                        <div className="text-medium-emphasis">{item.title}</div>
                        <strong>
                        {item.value}
                        </strong>
                        <CProgress thin className="mt-2" color={item.color} value={100} />
                    </CCol>
                    ))}
                </CRow>
                </CCardFooter>
            </CCard>
    )}
}

export default DetailChart;