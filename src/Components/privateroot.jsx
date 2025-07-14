import { Navigate } from "react-router-dom";


function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  

  if (!isLoggedIn) {
  alert("You must be logged in to access this page.");
    return <Navigate to="/login"/>;
    
  } return children






}



export default PrivateRoute;
