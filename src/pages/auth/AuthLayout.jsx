import React from 'react'
import { Outlet } from 'react-router'
import Toast from "../../components/common/ToastContainer";

function AuthLayout() {
  return (    
    <>
      <Toast />
      <Outlet />
    </>
  )
}

export default AuthLayout