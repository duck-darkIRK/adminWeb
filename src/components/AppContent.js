import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

const Dashboard = React.lazy(() => import('./Dashboard'))
const ManageUser = React.lazy(() => import('./ManageUser'))
const ManageGroup = React.lazy(() => import('./ManageGroup'))
const ManagePost = React.lazy(() => import('./ManagePost'))



const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
            <Route path="dashboard" element={<Dashboard />} name='Dashboard'/>
            <Route path='manage-user' element={<ManageUser />} name='ManageUser'/>
            <Route path='manage-group' element={<ManageGroup />} name='ManageGroup'/>
            <Route path='manage-post' element={<ManagePost />} name='ManagePost'/>
            <Route path="" element={<Navigate to="login" replace />} />
            <Route path="*" element={<Navigate to="404" replace />}/>
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
