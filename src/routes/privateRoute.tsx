/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import authContext from '../context/auth/auth.context'

const PrivateRoute: React.FC<any> = () => {
  const { user, isAuthenticated } = useContext(authContext)
  const location = useLocation()

  return user?.token && isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default PrivateRoute
