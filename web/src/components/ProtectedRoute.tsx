import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useAuthStore((state) => state.accessToken);
  const location = useLocation();

  if (!token) {
    // Redirect to login, and save origin location so user can return after logging in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
export default ProtectedRoute;
