import React from 'react'
import { useLocation } from 'react-router-dom';
import {
  CNavLink,
  CNavItem,
  CNav,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { 
  cilAccountLogout
} from '@coreui/icons';
import { setCookie } from '../../util/makeRequest'


const AppHeader = () => {
  const location = useLocation().pathname;

  return (
    <div style={{
      backgroundColor: 'white',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #9da5b1',
      fontSize: '18px',
      marginBottom: '18px',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      padding: '12px',
    }}>
      <CNav>
        <CNavItem>
          <CNavLink href="#" style={{color: '#4f5d73', fontWeight: location === '/dashboard' ? 700 : 400 }}>Dashboard</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#/manage-user" style={{color: '#4f5d73', fontWeight: location === '/manage-user' ? 700 : 400}}>Users</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#/manage-post" style={{color: '#4f5d73', fontWeight: location === '/manage-post' ? 700 : 400}}>Posts</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#/manage-group" style={{color: '#4f5d73', fontWeight: location === '/manage-group' ? 700 : 400}}>Groups</CNavLink>
        </CNavItem>
        {/* <CNavItem>
          <CNavLink href="#" style={{color: '#4f5d73'}}>Report</CNavLink>
        </CNavItem> */}
      </CNav>
      <CNav>
        <CNavItem>
          <CNavLink href="#/login" style={{color: '#4f5d73'}}>Login</CNavLink>
        </CNavItem>
      </CNav>
    </div>
  )
}

export default AppHeader
