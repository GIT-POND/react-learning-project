import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "./AuthProvider";

function isTokenExpired(token) {
  const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
  return (Math.floor((new Date).getTime() / 1000)) >= expiry;
}

const RequireAuth = () => {
    const {auth} = useContext(AuthContext);
    const location = useLocation();

  return (
      // while token not expired, render outlet
    isTokenExpired(auth.AccessToken)? <Navigate to='/Login' state={{from: location}} replace/> :  <Outlet/>
    
  )
}

export default RequireAuth