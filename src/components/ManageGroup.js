import React from "react";
import {
  CAvatar,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
  CFormInput,
  CButton,
  CCol,
  CFormLabel,
  CFormSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
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
  cilMenu,
  cilAlignCenter,
} from "@coreui/icons";
import { makeRequest } from "../util/makeRequest";
import { getRoomchatByTitleAsync, getRoomchatAsync } from "../webAdmin.ts";

import PartGroup from "./table/PartGroup";

import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import avatar4 from "../assets/images/avatar4.jpg";

class ManageGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableExample: [],
      searchType: "1",
      search: "",
    };
  }

  render() {
    return (
      <div>
        <div>
          <CForm className="row g-3">
            <CCol xs="auto" style={{ flexGrow: 1 }}>
              <CFormLabel htmlFor="input" className="visually-hidden">
                Password
              </CFormLabel>
              <CFormInput
                type="text"
                id="input"
                placeholder="Enter to find"
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
              />
            </CCol>
            <CCol>
              <CFormSelect
                aria-label="Default select example"
                options={[
                  { label: "Find by ID", value: "1" },
                  { label: "Find by Title", value: "2" },
                ]}
                onChange={(e) => {
                  this.setState({ searchType: e.target.value });
                }}
              />
            </CCol>
            <CCol xs="auto">
              <CButton
                type="submit"
                className="mb-3"
                onClick={() => {
                  this.setState({ tableExample: []})
                  if (this.state.searchType === "1") {
                    makeRequest(getRoomchatAsync, this.state.search)
                      .then((data) => {
                        this.setState({tableExample: [
                          {
                            avatar: { src: data.imgDisplay, status: "success" },
                            user: {
                              name: data.title,
                              new: true,
                              registered: data.created_at,
                              id: data.id
                            },
                            activity: data.updated_at,
                            member: data.member.length,
                            messages: data.data.length,
                            adminId: data.ownerUserId
                          },
                        ]})
                      })
                      .catch((err) => alert(err));
                  } else {
                    makeRequest(getRoomchatByTitleAsync, this.state.search)
                      .then((data) => {
                        console.log(data)
                        Array.isArray(data) ?
                        this.setState({
                          tableExample: data.map(item => {
                            return {
                              avatar: { src: item.imgDisplay, status: "success" },
                              user: {
                                name: item.title,
                                new: true,
                                registered: item.created_at,
                                id: item.id
                              },
                              activity: item.updated_at,
                              member: item.member.length,
                              messages: item.data.length,
                              adminId: item.ownerUserId
                            }
                          })
                        }): 
                        this.setState({tableExample: [
                          {
                            avatar: { src: data.imgDisplay, status: "success" },
                            user: {
                              name: data.title,
                              new: true,
                              registered: data.created_at,
                              id: data.id
                            },
                            activity: data.updated_at,
                            member: data.member.length,
                            messages: data.data.filter(it => it.isDisplay === true).length,
                            adminId: data.ownerUserId
                          },
                        ]})
                      })
                      .catch((err) => alert(err));
                  }
                }}
              >
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
                <CTableHeaderCell>Title</CTableHeaderCell>
                <CTableHeaderCell className="text-center">
                  Members
                </CTableHeaderCell>
                <CTableHeaderCell>Messages</CTableHeaderCell>
                <CTableHeaderCell>Activity</CTableHeaderCell>
                {/* <CTableHeaderCell className="text-center" /> */}
                <CTableHeaderCell className="text-center" />
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {this.state.tableExample.map((item, index) => (
                <PartGroup index={index} item={item} />
              ))}
            </CTableBody>
          </CTable>
        </div>
      </div>
    );
  }
}

export default ManageGroup;
