import React from "react";
//* React Router stuff
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
//* Components
import Navbar from "./Navbar";
import Footer from "./Footer";

//*Pages
import LandingPage from "../Pages/LandingPage";
import UserDetails from "../Pages/UserDetails";



const Main = () => {
    return (
    <>
        <Navbar />
        <div className="b-example-divider"></div>
        <Outlet />
        <div className="b-example-divider"></div>
        <Footer />
    </>
    )
}

const Layout = () => {

    const location = useLocation()


    return (
        <Routes>
            <Route path="main" element={<Main/>}>
                <Route path="home" exact element={<LandingPage />} />
                <Route path="home/:id" element={<UserDetails id={location.state} /> } />
            </Route>
            <Route path="*" element={<Navigate to="/main/home"/>}/>
        </Routes>
    )
}

export default Layout 