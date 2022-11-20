import React from "react";
//* Components
import Hero from "../Components/Hero";
import UserList from "../Components/UserList";

const LandingPage = () => {

    return (
        <div>
            <Hero/>
            <div className="b-example-divider"></div>
            <UserList/>
        </div>
    )

}

export default LandingPage