import React from "react";
import Login from "../components/auth/Login.jsx";
import Register from "../components/auth/Register.jsx";
import ForgotPassword from "../components/auth/Forgotpassword.jsx";
import OtpComponent from "../components/auth/OtpComponent.jsx";
import { Route } from "react-router";
import AuthLayout from "../pages/auth/AuthLayout.jsx";

function AuthRoutes() {
  return (
    <Route path="auth" element={<AuthLayout />}>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="verify"element={<OtpComponent />} />
      
    </Route>
  );
}

export default AuthRoutes;
