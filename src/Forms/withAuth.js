import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent, allowedPaths = []) => {
  const AuthHOC = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      if (
        !isAuthenticated &&
        !allowedPaths.includes(window.location.pathname)
      ) {
        navigate("/login");
      }
    }, [navigate]);

    // eslint-disable-next-line no-undef
    return isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : null;
  };

  return AuthHOC;
};

export default withAuth;