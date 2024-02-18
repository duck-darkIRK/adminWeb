import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import './scss/style.scss'
import { updateAccessTokenAsync } from './webAdmin.ts';
import { getCookie, setCookie } from './util/makeRequest.js'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const MainLayout = React.lazy(() => import('./layouts/MainLayout'))
const Page404 = React.lazy(() => import('./views/Page404'))
const Login = React.lazy(() => import('./views/Login.js'))

class App extends React.Component {

  async checkData() {
    try {
      if(!getCookie('refresh_token') || !getCookie('access_token')) {
        throw new Error();
      }
      const data = await updateAccessTokenAsync(getCookie('id'), getCookie('refresh_token'))
      if(data.id){
        this.setState({isCheck: true})
        return true
      }
      throw new Error()
    } catch {
      return false
    }
  }



  render(){
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            {/* <Route path="*" element={<Navigate to="/login" replace />}/> */}
            <Route exact path="/login" name="Login" element={<Login />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route path="*" name="Home" element={<MainLayout />} />
            {/* {this.state.data ? <Route path="*" name="Home" element={<MainLayout />} /> : <Route path="*" element={<Navigate to="/login" replace />}/>} */}
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
