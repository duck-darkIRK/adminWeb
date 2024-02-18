import React from "react";
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
  CButton,
  CCol,
  CFormSelect,
  CFormTextarea
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilPeople,
} from "@coreui/icons";

import PartUser from "./table/PartPost";

import { makeRequest } from "../util/makeRequest";
import { getPostAsync, searchPostAsync, getUserDataByIdAsync } from '../webAdmin.ts'

class ManagePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      searchType: '1',
      search: '',
      detailData: []
    };
  }

  render() {
    return (
      <div>
        <div>
        <CForm className="row g-3">
          <CCol xs="auto" style={{flexGrow: 1}}>
            <CFormTextarea 
              placeholder="Enter to find"
              rows={1}
              onChange={(e) => this.setState({search: e.target.value})} 
            ></CFormTextarea>
          </CCol>
          <CCol>
            <CFormSelect 
              aria-label="Default select example"
              options={[
                { label: 'Find by ID', value: '1' },
                { label: 'Find by Content', value: '2' },
              ]}
              onChange={(e) => this.setState({searchType: e.target.value, postData: [], detailData: []})}
            />
          </CCol>
          <CCol xs="auto">
            <CButton type="submit" className="mb-3" onClick={() => {
              this.setState({postData: [], detailData: []});
              if (this.state.searchType === '1'){
                makeRequest(getPostAsync, this.state.search)
                .then((data) => {
                  return makeRequest(getUserDataByIdAsync, data.ownerUserId)
                  .then(userData => {
                    const newData = [{
                        avatar: { src: userData.detail.avatarUrl, status: "success" },
                        user: {
                          name: userData.detail.name,
                          new: true,
                          registered: data.created_at,
                        },
                        activity: "10 sec ago",
                        like: data.interaction.length,
                        comment: data.comment.length
                    }]
                    const detailPostData = [
                      {
                        id: data.id,
                        content: data.content,
                        poster: userData.detail.name,
                        posterId: userData.id,
                        postAt: data.created_at,
                        updateAt: data.updated_at,
                        img: data.fileUrl[0]
                      }
                    ]
                    this.setState({postData: newData, detailData: detailPostData})
                  })
                  .catch((error) => alert(error))
                })
                .catch((error) => alert(error))
              } else {
                makeRequest(searchPostAsync, this.state.search)
                .then((data) => {
                  data.forEach((dataSheet) => {
                    makeRequest(getUserDataByIdAsync, dataSheet.ownerUserId)
                    .then(userData => {
                      const newData = data.map(item => {
                        console.log(item)
                        return {
                          avatar: { src: userData.detail.avatarUrl, status: "success" },
                          user: {
                            name: userData.detail.name,
                            new: true,
                            registered: item.created_at,
                          },
                          activity: "10 sec ago",
                          like: item.interaction.length,
                          comment: item.comment.length
                      }})
                      const detailPostData = data.map(item => {
                        return {
                          id: item.id,
                          content: item.content,
                          poster: userData.detail.name,
                          posterId: userData.id,
                          postAt: item.created_at,
                          updateAt: item.updated_at,
                          img: item.fileUrl[0]
                        }
                      })
                      console.log(newData)
                      this.setState({postData: newData, detailData: detailPostData})
                    })
                    .catch((error) => alert(error))
                  })
                })
                .catch((error) => alert(error))
              }
            }}>
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
                <CTableHeaderCell>Poster</CTableHeaderCell>
                <CTableHeaderCell className="text-center">
                  Like
                </CTableHeaderCell>
                <CTableHeaderCell>Comment</CTableHeaderCell>
                <CTableHeaderCell>Activity</CTableHeaderCell>
                <CTableHeaderCell className="text-center" />
                <CTableHeaderCell className="text-center" />
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {this.state.postData.map((item, index) => (
                <PartUser index={index} item={item} detailData={this.state.detailData[index]} />
              ))}
            </CTableBody>
          </CTable>
        </div>
      </div>
    );
  }
}


export default ManagePost;
