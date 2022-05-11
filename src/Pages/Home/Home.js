import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Treatment from './Treatment';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div >
            <Banner />
            <Info />
            <Services />
            <Treatment />
            <MakeAppointment/>
            <Testimonials />
            <Contact/>
            <Footer/>         
        </div>
    );
};

export default Home;