import React from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import { useState } from 'react';
import Footer from './../Shared/Footer';

const Appointment = () => {
    const [ date, setDate ] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer/>
        </div>
    );
};

export default Appointment;