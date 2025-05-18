import Login from "../components/auth/Login.jsx";
import Register from "../components/auth/Register.jsx";
import ForgotPassword from "../components/auth/Forgotpassword.jsx";
import OtpComponent from "../components/auth/OtpComponent.jsx";
import { Route } from "react-router";
import AuthLayout from "../pages/auth/AuthLayout.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import constants from "../configs/constant.js";
import AuthCallback from "../pages/auth/AuthCallback.jsx";

function AuthRoutes() {
  return (
    <Route path="auth" element={<AuthLayout />}>
      <Route
        index
        element={
          <GoogleOAuthProvider clientId={constants.googleClientId}>
            <Login />
          </GoogleOAuthProvider>
        }
      />
      <Route path="register" element={<Register />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="verify" element={<OtpComponent />} />
      <Route path="callback" element={<AuthCallback />} />

    </Route>
  );
}

export default AuthRoutes;
