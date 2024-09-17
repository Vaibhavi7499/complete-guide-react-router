import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let { isLogin } = useContext(GlobalContext);

  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
