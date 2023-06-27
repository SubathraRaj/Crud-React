import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigate() {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  const home = () => {
    navigate("/home");
  };
  const about = () => {
    navigate("/about");
  };

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
      console.log("Clear Auth: ", localStorage);
      navigate("/login");
    }
    //eslint-disable-next-line
  }, [logout]);

  const navigateLogout = () => {
    localStorage.removeItem("auth");
    console.log("removed auth: ", localStorage);
    setLogout(true);
    
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <div class="container-fluid justify-content-center">
          <button className="btn btn-outline-success text-white" onClick={home}>
            Employee Details
          </button>
          <button
            className="btn btn-outline-success text-white"
            onClick={about}
          >
            Add Employee Details
          </button>
          <button
            className="btn btn-outline-success text-white"
            onClick={navigateLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navigate;
