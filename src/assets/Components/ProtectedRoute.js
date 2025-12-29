// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const isAuth = localStorage.getItem("isLoggedIn") === "true";
//   return isAuth ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;



import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
