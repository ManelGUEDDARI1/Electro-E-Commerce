//import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const navigate= useNavigate();
  return userInfo && userInfo.isAdmin ? children : navigate("/signin");
};

export default AdminRoute;

