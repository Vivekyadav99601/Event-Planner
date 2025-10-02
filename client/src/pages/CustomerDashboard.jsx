import React, { useEffect, useState } from "react";
import Sidebar from "../components/customer/Sidebar";
import Overview from "../components/customer/Overview";
import Profile from "../components/customer/Profile";
import Booking from "../components/customer/Booking";
import Support from "../components/customer/Support";
import Feedback from "../components/customer/Feedback";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const CustomerDashboard =()=>{
    const navigate = useNavigate();
    const [active,setActive] = useState("profile");

const {isLogin, isAdmin} = useAuth();

useEffect(()=>{

    if(!isLogin || isAdmin){
        navigate("/login");
    }
},[isLogin,isAdmin,navigate]);



    return(
        <>
        <div className="flex">
        <Sidebar active ={active} setActive={setActive} />
        <div className="border w-full">
            {active === "overview" && <Overview />}
            {active === "profile" && <Profile />}
            {active === "booking" && <Booking />}
            {active === "support" && <Support />}
            {active === "feedback" && <Feedback />}

        </div>
        </div>
        </>
    )
}
export default CustomerDashboard;