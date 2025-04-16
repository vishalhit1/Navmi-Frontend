import { useState, useEffect } from 'react';
import BetterLoan from "../Component/Home/BetterLoan"
import CompanyValue from "../Component/Home/CompanyValue"
import HomeComponent from "../Component/Home/Homecomponent"
import OurClients from "../Component/Home/OurClients"
import Testimonials from "../Component/Home/Testimonials"

const Homepage = () => {
    return (
        <div>
            <HomeComponent />
            <BetterLoan />
            <OurClients />
            <CompanyValue />
            <Testimonials />
            {/* <Blogs /> */}
        </div>
    )
}

export default Homepage