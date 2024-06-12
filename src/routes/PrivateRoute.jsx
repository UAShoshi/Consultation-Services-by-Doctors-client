import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation()
  console.log(location.pathname);

  if (loading) {
    return <div className="flex items-center justify-center"><progress className="progress w-56"></progress></div>
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;