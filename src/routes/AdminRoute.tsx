import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }:any) {
  const authState = useSelector((store: any) => store.auth);
  if (!authState.role || authState.role === "USER") {
    return <Navigate to={"/vite-deploy/"} />;
  }
  return children;
}

export default AdminRoute;
