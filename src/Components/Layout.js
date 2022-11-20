import React from "react";
//* Components
import Navbar from "./Navbar";
import Footer from "./Footer";

//*Pages
import LandingPage from "../Pages/LandingPage";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <div className="b-example-divider"></div>
            <LandingPage/>
            <div className="b-example-divider"></div>
            <Footer/>
        </div>
    )
}

export default Layout 