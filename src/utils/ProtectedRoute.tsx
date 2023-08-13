import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getCurrentUser } from "../store/user/userSlice";
import { userRoles } from "./constants";

const ProtectedRoute = ({
  expectedRoles = [],
  children,
}: {
  expectedRoles?: string[];
  children: JSX.Element;
}) => {
  // const user: UserType = useSelector(getCurrentUser);
  const user = useAuth();
  let location = useLocation();
  const areRolesRequired = !!expectedRoles?.length;

  const rolesMatch = areRolesRequired
    ? expectedRoles.some((r) => Object.values(userRoles).indexOf(r) >= 0)
    : true;

  if (!user.email) {
    return <Navigate to={"/auth"} replace state={{ from: location }} />;
  }  

  if(!rolesMatch){
    // TODO show not authorized component
    return <Navigate to={"/"} replace state={{from:location}}/>
  }

  return children
};

export default ProtectedRoute;
