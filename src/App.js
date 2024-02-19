import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const MainLayout = React.lazy(() => import('./layouts/MainLayout'))
const Page404 = React.lazy(() => import('./views/Page404'))
const Login = React.lazy(() => import('./views/Login.js'))
const Privacy = React.lazy(() => import('./views/Privacy'))
const ContactUs = React.lazy(() => import('./views/ContactUs'))

class App extends React.Component {

  render(){
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login" element={<Login />} />
            <Route exact path='/privacy' element={<Privacy />} name='Privacy'/>
            <Route exact path='/contact' element={<ContactUs />} name='ContactUs'/>
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route path="*" name="Home" element={<MainLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
