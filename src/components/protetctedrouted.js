import React from "react";
import { useUserAuth } from "../context/authContextApi";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to='/' />
  }

  return children;
}

export default ProtectedRoute;
