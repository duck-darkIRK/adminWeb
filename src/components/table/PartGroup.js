import React from "react";
import { CAvatar, CProgress, CTableDataCell, CTableRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilMenu,
  cilAlignCenter,
  cilUserFollow,
  cilUserUnfollow,
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
            onClick={() => {
                makeRequest(removeRoomchatAsync, this.state.item.adminId, this.state.item.user.id)
                .then(() => {
                  console.log('removed')
                })
                .catch(err => console.log(err))
              }
            } 
          >
            <CIcon
              size="xl"
              icon={this.state.isBanned ? cilUserFollow : cilUserUnfollow}
            />
          </CTableDataCell>
        </CTableRow>
      </>
    );
  }
}

export default PartUser;
