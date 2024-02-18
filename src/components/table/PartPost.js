import React from "react";
import { CAvatar, CProgress, CTableDataCell, CTableRow, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilMenu,
  cilAlignCenter,
  cilTrash,
  cilTransfer
} from "@coreui/icons";
import PostDetail from "../card/PostDetail";
import { makeRequest } from "../../util/makeRequest";
import { removePostAsync } from "../../webAdmin.ts"



class PartUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      item: props.item,
      onHoverIcon: false,
      isDelete: false,
      viewDetail: false,
      detailData: props.detailData,
      visible: false,
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
              status={this.state.item.avatar.status}
            />
          </CTableDataCell>
          <CTableDataCell>
            <div>{this.state.item.user.name}</div>
            <div className="small text-medium-emphasis">
              <span>{this.state.item.user.new ? "New" : "Recurring"}</span> |
              Post at: {this.state.item.user.registered}
            </div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            {this.state.item.like}
          </CTableDataCell>
          <CTableDataCell>
            {this.state.item.comment}
          </CTableDataCell>
          <CTableDataCell>
            <div className="small text-medium-emphasis">Last login</div>
            <strong>{this.state.item.activity}</strong>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <CIcon
              size="xl"
              icon={this.state.onHoverIcon ? cilAlignCenter : cilMenu}
              onMouseEnter={() => this.setState({ onHoverIcon: true })}
              onMouseLeave={() => this.setState({ onHoverIcon: false })}
              onClick={() => this.setState({ viewDetail: !this.state.viewDetail })}
            />
          </CTableDataCell>
          <CTableDataCell
            className="text-center"
            onClick={() => {
              this.setState({ visible: true });
            }}
          >
            <CIcon
              size="xl"
              icon={this.state.isDelete ? cilTransfer : cilTrash}
            />
          </CTableDataCell>
        </CTableRow>
        {this.state.viewDetail && <div style={{
          position: "fixed",
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white',
          opacity: 0.5
        }} onClick={() => {this.setState({viewDetail: !this.state.viewDetail})}}></div>}
        <div style={{
          position: "fixed",
          top: '50vh',
          left: '50vw',
          transform: "translate(-50%, -50%)",
        }}>
          {this.state.viewDetail && <PostDetail detailData={this.state.detailData}/> }
        </div>
        <CModal
      visible={this.state.visible}
      onClose={() => this.setState({visible: false})}
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader onClose={() => this.setState({visible: false})}>
        <CModalTitle id="LiveDemoExampleLabel">Nút xóa - Trách nhiệm to lớn</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <p>Nút xóa bài viết tuy nhỏ bé nhưng ẩn chứa trách nhiệm to lớn. Mỗi lần nhấp chuột, một tiếng nói sẽ bị tước đi, thông tin biến mất vĩnh viễn.</p>
    <h4>Hãy sử dụng nút xóa một cách cẩn trọng:</h4>
    <ul>
        <li><h6>Tôn trọng quyền tự do ngôn luận:</h6> Chỉ xóa bài viết khi vi phạm quy tắc, gây ảnh hưởng tiêu cực hoặc vi phạm pháp luật.</li>
        <li><h6>Giữ gìn sự minh bạch:</h6> Thông báo rõ lý do xóa bài, đảm bảo sự công bằng và tránh nghi ngờ kiểm duyệt.</li>
        <li><h6>Bảo vệ quyền riêng tư:</h6> Tránh tiết lộ thông tin cá nhân nhạy cảm.</li>
        <li><h6>Lường trước ảnh hưởng:</h6> Xóa bài có thể ảnh hưởng đến thảo luận, tranh luận hoặc chia sẻ thông tin hữu ích.</li>
        <li><h6>Cân nhắc trách nhiệm pháp lý:</h6> Tránh vi phạm luật pháp hoặc gây thiệt hại cho người khác.</li>
    </ul>
    <p>Nút xóa là công cụ mạnh mẽ nhưng đi kèm trách nhiệm to lớn. Hãy sử dụng nó một cách có ý thức, minh bạch và tôn trọng quyền lợi cộng đồng.</p>
    <h6 style={{color: "red"}}>Bạn chắc chắn muốn xóa chứ!</h6>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => this.setState({visible: false})}>
          Close
        </CButton>
        <CButton color="primary"
          onClick={() => {
            this.setState({visible: false, isDelete: true})
            makeRequest(removePostAsync, this.state.posterId, this.state.id)
          }}
        >Save changes</CButton>
      </CModalFooter>
    </CModal>
      </>
    );
  }
}

export default PartUser;
