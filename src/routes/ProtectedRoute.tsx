import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from "./types";
import React, { useContext } from "react";
import { GlobalContext } from "../context";

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/login",
  children,
}) => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext is not defined");
  }

  const { user } = context;
  
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
