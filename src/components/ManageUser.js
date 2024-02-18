import React from "react";
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
  CFormInput,
  CButton,
  CCol,
  CFormLabel,
  CFormSelect
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cibCcMastercard,
  cifUs,
  cilPeople,
  cifVn
} from "@coreui/icons";
import { makeRequest } from '../util/makeRequest'
import { searchUserAsync, getUserDataByIdAsync } from '../webAdmin.ts'

import PartUser from "./table/PartUser";


class ManageUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      search: '',
      searchType: '1',
      userDetailData: [],
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div>
        <CForm className="row g-3">
          <CCol xs="auto" style={{flexGrow: 1}}>
            <CFormLabel htmlFor="input" className="visually-hidden"></CFormLabel>
            <CFormInput type="text" id="input" placeholder="Enter to find" onChange={(e) => this.setState({search: e.target.value})} />
          </CCol>
          <CCol>
            <CFormSelect 
              aria-label="Default select example"
              options={[
                { label: 'Find by ID', value: '1' },
                { label: 'Find by Name', value: '2' },
              ]}
              onChange={(e) => this.setState({searchType: e.target.value, userData: [], userDetailData: []})}
            />
          </CCol>
          <CCol xs="auto">
            <CButton type="submit" className="mb-3" onClick={() => {
              if (this.state.searchType === '1'){
                makeRequest(getUserDataByIdAsync, this.state.search)
                .then((item) => {
                  const newData = [{
                      id: item.id,
                      avatar: { src: item.detail.avatarUrl, status: "success" },
                      user: {
                        name: item.detail.name,
                        new: true,
                        registered: item.created_at,
                      },
                      country: { name: "VietNam", flag: cifVn },
                      usage: {
                        value: 50,
                        period: "Jun 11, 2021 - Jul 10, 2021",
                        color: "success",
                      },
                      activity: "10 sec ago",
                      banned: item.role === "BANNED"
                    }]
                  const detailData = [[
                    {
                      count: 1,
                      Data: "UserID",
                      Value: item.id,
                      _cellProps: { id: { scope: "row" } },
                    },
                    {
                      count: 2,
                      Data: "Name",
                      Value: item.detail.name,
                      _cellProps: { id: { scope: "column" } },
                    },
                    {
                      count: 3,
                      Data: "Email",
                      Value: item.email,
                      _cellProps: { id: { scope: "column" } },
                    },
                    {
                      count: 4,
                      Data: "Online",
                      Value: "???",
                      _cellProps: { id: { scope: "column" } },
                    },
                    {
                      count: 5,
                      Data: "Nickname",
                      Value: item.detail.nickName,
                      _cellProps: { id: { scope: "column" } },
                    },
                    {
                      count: 5,
                      Data: "Number phone",
                      Value: item.detail.phoneNumber,
                      _cellProps: { id: { scope: "column" } },
                    },
                    {
                      count: 6,
                      Data: "Country code",
                      Value: item.detail.countryCode,
                      _cellProps: { id: { scope: "column" } },
                    },
                    {
                      count: 7,
                      Data: "Birthday",
                      Value: item.detail.birthday,
                      _cellProps: { id: { scope: "column" } },
                    },
                  ]]
                  this.setState({ userData: newData, userDetailData: detailData})
                })
                .catch((error) => alert(error))
              } else {
                makeRequest(searchUserAsync, this.state.search)
                .then((data) => {
                  const newData = data.map((item) => {
                    return {
                      id: item.id,
                      avatar: { src: item.detail.avatarUrl, status: "success" },
                      user: {
                        name: item.detail.name,
                        new: true,
                        registered: item.created_at,
                      },
                      country: { name: "VietNam", flag: cifVn },
                      usage: {
                        value: 50,
                        period: "Jun 11, 2021 - Jul 10, 2021",
                        color: "success",
                      },
                      activity: "10 sec ago",
                      banned: item.role === "BANNED"
                    }
                  })
                  const detailData = data.map((item) => {
                    return [
                      {
                        count: 1,
                        Data: "UserID",
                        Value: item.id,
                        _cellProps: { id: { scope: "row" } },
                      },
                      {
                        count: 2,
                        Data: "Name",
                        Value: item.detail.name,
                        _cellProps: { id: { scope: "column" } },
                      },
                      {
                        count: 3,
                        Data: "Email",
                        Value: item.email,
                        _cellProps: { id: { scope: "column" } },
                      },
                      {
                        count: 4,
                        Data: "Online",
                        Value: "???",
                        _cellProps: { id: { scope: "column" } },
                      },
                      {
                        count: 5,
                        Data: "Nickname",
                        Value: item.detail.nickName,
                        _cellProps: { id: { scope: "column" } },
                      },
                      {
                        count: 5,
                        Data: "Number phone",
                        Value: item.detail.phoneNumber,
                        _cellProps: { id: { scope: "column" } },
                      },
                      {
                        count: 6,
                        Data: "Country code",
                        Value: item.detail.countryCode,
                        _cellProps: { id: { scope: "column" } },
                      },
                      {
                        count: 7,
                        Data: "Birthday",
                        Value: item.detail.birthday,
                        _cellProps: { id: { scope: "column" } },
                      },
                    ]
                  });
                  this.setState({ userData: newData, userDetailData: detailData })
                })
                .catch((error) => alert(error))
              }}}>
              Submit
            </CButton>
          </CCol>
        </CForm>
        </div>
        <div>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell>
                <CTableHeaderCell>User</CTableHeaderCell>
                <CTableHeaderCell className="text-center">
                  Country
                </CTableHeaderCell>
                <CTableHeaderCell>Usage</CTableHeaderCell>
                <CTableHeaderCell>Activity</CTableHeaderCell>
                <CTableHeaderCell className="text-center" />
                <CTableHeaderCell className="text-center" />
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {this.state.userData.map((item, index) => {
                return(
                  <PartUser index={index} item={item} detailData={this.state.userDetailData[index]} />
              )})}
            </CTableBody>
          </CTable>
        </div>
      </div>
    );
  }
}


export default ManageUser;
