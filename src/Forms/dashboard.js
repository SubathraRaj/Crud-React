import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard =() => {
    const navigate= useNavigate();
    const [logout, setLogout]= useState(false);

    useEffect (()=>{
        if(!localStorage.getItem('auth')) navigate("/Login");
        //eslint-disable-next-line
    }, [logout]);

    const logoutHandler =(e)=> {
        e.preventDefalut();
        localStorage.removeItem('auth');
        setLogout(true);
    };
    return (
        <div>
        <button onClick={logoutHandler} className="btn btn-primary text-left">
        Logut
        </button>
        <hr/>
        <div> Dashboard </div>
        </div>
    )
}
export default Dashboard;
