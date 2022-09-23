/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import authContext from '../context/auth/auth.context'

const PublicRoute: React.FC<any> = () => {
    const { user, isAuthenticated } = useContext(authContext)

  return user?.token && isAuthenticated ? <Navigate replace to="/" /> : <Outlet />
}

export default PublicRoute
