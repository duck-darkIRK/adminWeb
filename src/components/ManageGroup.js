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
  CFormSelect
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
  cilAlignCenter
} from "@coreui/icons";

import PartUser from "./table/PartUser";

import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import avatar4 from "../assets/images/avatar4.jpg";

class ManageGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableExample: [
        {
          avatar: { src: avatar1, status: "success" },
          user: {
            name: "Yiorgos Avraamu",
            new: true,
            registered: "Jan 1, 2021",
          },
          country: { name: "USA", flag: cifUs },
          usage: {
            value: 50,
            period: "Jun 11, 2021 - Jul 10, 2021",
            color: "success",
          },
          payment: { name: "Mastercard", icon: cibCcMastercard },
          activity: "10 sec ago",
        },
        {
          avatar: { src: avatar2, status: "danger" },
          user: {
            name: "Avram Tarasios",
            new: false,
            registered: "Jan 1, 2021",
          },
          country: { name: "Brazil", flag: cifBr },
          usage: {
            value: 22,
            period: "Jun 11, 2021 - Jul 10, 2021",
            color: "info",
          },
          payment: { name: "Visa", icon: cibCcVisa },
          activity: "5 minutes ago",
        },
        {
          avatar: { src: avatar3, status: "warning" },
          user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2021" },
          country: { name: "India", flag: cifIn },
          usage: {
            value: 74,
            period: "Jun 11, 2021 - Jul 10, 2021",
            color: "warning",
          },
          payment: { name: "Stripe", icon: cibCcStripe },
          activity: "1 hour ago",
        },
        {
          avatar: { src: avatar4, status: "secondary" },
          user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2021" },
          country: { name: "France", flag: cifFr },
          usage: {
            value: 98,
            period: "Jun 11, 2021 - Jul 10, 2021",
            color: "danger",
          },
          payment: { name: "PayPal", icon: cibCcPaypal },
          activity: "Last month",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div>
        <CForm className="row g-3">
          <CCol xs="auto" style={{flexGrow: 1}}>
            <CFormLabel htmlFor="input" className="visually-hidden">
              Password
            </CFormLabel>
            <CFormInput type="text" id="input" placeholder="Enter to find" />
          </CCol>
          <CCol>
            <CFormSelect 
              aria-label="Default select example"
              options={[
                { label: 'Find by ID', value: '1' },
                { label: 'Find by Name', value: '2' },
              ]}
            />
          </CCol>
          <CCol xs="auto">
            <CButton type="submit" className="mb-3">
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
                <CTableHeaderCell>Admin</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Members</CTableHeaderCell>
                <CTableHeaderCell>Usage</CTableHeaderCell>
                <CTableHeaderCell>Activity</CTableHeaderCell>
                <CTableHeaderCell className="text-center" />
                <CTableHeaderCell className="text-center" />
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {this.state.tableExample.map((item, index) => (
                <PartUser index={index} item={item} />
              ))}
            </CTableBody>
          </CTable>
        </div>
      </div>
    );
  }
}


export default ManageGroup;
