import React from "react";
import { CAvatar, CProgress, CTableDataCell, CTableRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilMenu,
  cilAlignCenter,
  cilUserFollow,
  cilUserUnfollow,
} from "@coreui/icons";

import UserDetailData from "./UserDetailData";
import { makeRequest, getCookie } from "../../util/makeRequest";
import { banUserAsync, unbanUserAsync, CommandDto} from '../../webAdmin.ts'

class PartUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      item: props.item,
      detailData: props.detailData,
      onHoverIcon: false,
      isBanned: props.item.banned,
      viewDetail: false,
    };
  }
  render() {
    const ban = new CommandDto(this.state.item.id, getCookie('id'), "BANNED")
    const unBan = new CommandDto(this.state.item.id, getCookie('id'), "UNBANNED")
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
              Registered: {this.state.item.user.registered}
            </div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <CIcon
              size="xl"
              icon={this.state.item.country.flag}
              title={this.state.item.country.name}
            />
          </CTableDataCell>
          {/* <CTableDataCell>
            <div className="clearfix">
              <div className="float-start">
                <strong>{this.state.item.usage.value}%</strong>
              </div>
              <div className="float-end">
                <small className="text-medium-emphasis">
                  {this.state.item.usage.period}
                </small>
              </div>
            </div>
            <CProgress
              thin
              color={this.state.item.usage.color}
              value={this.state.item.usage.value}
            />
          </CTableDataCell> */}
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
              this.state.isBanned ? 
                unbanUserAsync( unBan, getCookie('refresh_token'))  && this.setState({isBanned: !this.state.isBanned}) :
                banUserAsync( ban, getCookie('refresh_token'))  && this.setState({isBanned: !this.state.isBanned})
              }
            } 
          >
            <CIcon
              size="xl"
              icon={this.state.isBanned ? cilUserFollow : cilUserUnfollow}
            />
          </CTableDataCell>
        </CTableRow>
        {this.state.viewDetail && <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white',
          opacity: 0.5,
          zIndex: 2
        }} onClick={() => this.setState({viewDetail: !this.state.viewDetail})}></div>}
        <div style={{
          position: 'fixed',
          boxSizing: 'border-box',
          top: '50vh',
          left: '50vw',
          transform: 'translate(-50%, -50%)',
          zIndex: 3
        }}>
          {this.state.viewDetail && <UserDetailData detailData={this.state.detailData} />}
        </div>
      </>
    );
  }
}

export default PartUser;
