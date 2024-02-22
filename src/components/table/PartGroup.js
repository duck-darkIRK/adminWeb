import React from "react";
import { CAvatar, CProgress, CTableDataCell, CTableRow,
    CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilMenu,
  cilAlignCenter,
  cilUserFollow,
  cilUserUnfollow,
  cilX,
  cilTrash,

} from "@coreui/icons";

import { makeRequest, getCookie } from "../../util/makeRequest";
import { removeRoomchatAsync } from '../../webAdmin.ts'

class PartUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      item: props.item,
      detailData: props.detailData,
      isBanned: props.item.isDisplay,
      visible: false
    };
  }
  render() {
    return (
      <>
        <CTableRow v-for="item in tableItems" key={this.state.index}>
          <CTableDataCell className="text-center">
            <CAvatar
              size="md"
              src={this.state.item.avatar.src}
              // status={this.state.item.avatar.status}
            />
          </CTableDataCell>
          <CTableDataCell>
            {this.state.item.user.name}
            <div className="small text-medium-emphasis">{this.state.item.user.id}</div>
            <div className="small text-medium-emphasis">Admin: {this.state.item.adminId}</div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            {this.state.item.member}
          </CTableDataCell>
          <CTableDataCell>
            {this.state.item.messages}
          </CTableDataCell>
          <CTableDataCell>
            {/* <div className="small text-medium-emphasis">Last login</div> */}
            {/* <strong>{this.state.item.activity}</strong> */}
            {this.state.item.activity}
          </CTableDataCell>
          {/* <CTableDataCell className="text-center">
            <CIcon
              size="xl"
              icon={this.state.onHoverIcon ? cilAlignCenter : cilMenu}
              onMouseEnter={() => this.setState({ onHoverIcon: true })}
              onMouseLeave={() => this.setState({ onHoverIcon: false })}
              onClick={() => this.setState({ viewDetail: !this.state.viewDetail })}
            />
          </CTableDataCell> */}
          <CTableDataCell
            className="text-center"
            // onClick={() => {
            //     makeRequest(removeRoomchatAsync, this.state.item.adminId, this.state.item.user.id)
            //     .then(() => {
            //       console.log('removed')
            //     })
            //     .catch(err => console.log(err))
            //   }
            // } 
          >
            <CIcon
              size="xl"
              icon={this.state.isBanned ? cilX : cilTrash}
              onClick={() => {
                !this.state.isBanned && this.setState({visible: true })
              }}
            />
          </CTableDataCell>
        </CTableRow>
        <CModal
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
          aria-labelledby="LiveDemoExampleLabel"
        >
          <CModalHeader onClose={() => this.setState({ visible: false })}>
            <CModalTitle id="LiveDemoExampleLabel">
              Nút xóa - Trách nhiệm to lớn
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p>
              Nút xóa bài viết tuy nhỏ bé nhưng ẩn chứa trách nhiệm to lớn. Mỗi
              lần nhấp chuột, một tiếng nói sẽ bị tước đi, thông tin biến mất
              vĩnh viễn.
            </p>
            <h4>Hãy sử dụng nút xóa một cách cẩn trọng:</h4>
            <ul>
              <li>
                <h6>Tôn trọng quyền tự do ngôn luận:</h6> Chỉ nhóm viết khi
                vi phạm quy tắc, gây ảnh hưởng tiêu cực hoặc vi phạm pháp luật.
              </li>
              <li>
                <h6>Giữ gìn sự minh bạch:</h6> Thông báo rõ lý do xóa nhóm, đảm
                bảo sự công bằng và tránh nghi ngờ kiểm duyệt.
              </li>
              <li>
                <h6>Bảo vệ quyền riêng tư:</h6> Tránh tiết lộ thông tin cá nhân
                nhạy cảm.
              </li>
              <li>
                <h6>Lường trước ảnh hưởng:</h6> Xóa nhóm có thể ảnh hưởng đến
                thảo luận, tranh luận hoặc chia sẻ thông tin hữu ích.
              </li>
              <li>
                <h6>Cân nhắc trách nhiệm pháp lý:</h6> Tránh vi phạm luật pháp
                hoặc gây thiệt hại cho người khác.
              </li>
            </ul>
            <p>
              Nút xóa là công cụ mạnh mẽ nhưng đi kèm trách nhiệm to lớn. Hãy sử
              dụng nó một cách có ý thức, minh bạch và tôn trọng quyền lợi cộng
              đồng.
            </p>
            <h6 style={{ color: "red" }}>Bạn chắc chắn muốn xóa chứ!</h6>
          </CModalBody>
          <CModalFooter>
            <CButton
              color="secondary"
              onClick={() => this.setState({ visible: false })}
            >
              Close
            </CButton>
            <CButton
              color="primary"
              onClick={() => {
                this.setState({ visible: false, isBanned: true });
                makeRequest(removeRoomchatAsync, this.state.item.adminId, this.state.item.user.id)
                .then(() => {
                  console.log('removed')
                })
                .catch(err => console.log(err))
              }}
            >
              Save changes
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    );
  }
}

export default PartUser;
