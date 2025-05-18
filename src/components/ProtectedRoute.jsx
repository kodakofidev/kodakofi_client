import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, requiredRole }) => {
  const auth = useSelector((state) => state.auth);
  const { isLogin, user } = auth;

  // Not logged in, redirect to login
  if (!isLogin) {
    return <Navigate to="/auth" replace />;
  }

  // Check role if required
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // Render children or outlet
  return children || <Outlet />;
};

export default ProtectedRoute;
