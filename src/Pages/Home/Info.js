import React from 'react';
import clock from "../../Assets/icons/clock.svg"
import marker from "../../Assets/icons/marker.svg"
import phone from "../../Assets/icons/phone.svg"
import InfoCard from './InfoCard';

const Info = () => {
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" img={clock} bgClass="bg-gradient-to-r from-secondary to-primary" cardText="Our chamber opens at 10 A.M. and closed at 10 P.M"></InfoCard>
            <InfoCard cardTitle="Visit our location" img={marker} bgClass="bg-accent" cardText="New York, WV 1006, United States"></InfoCard>
            <InfoCard cardTitle="Contact us now" img={phone} bgClass="bg-gradient-to-r from-secondary to-primary" cardText="+910 123 456987"></InfoCard>
        </div>
    );
};

export default Info;