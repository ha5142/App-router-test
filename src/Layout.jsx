import React from "react";
 import Header from "./components/Header/Header";
 import Footer  from "./components/Footer/Footer";
 import { Outlet } from "react-router-dom";

 //layout as a base of outlet
 //in the outlet changing elements 
function Layout() {
    return (
        <>
        <Header />  
        <Outlet />
        <Footer />
        
        </>
    )
}
export default Layout