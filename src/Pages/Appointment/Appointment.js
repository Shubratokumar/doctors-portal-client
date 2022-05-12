import React from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import { useState } from 'react';

const Appointment = () => {
    const [ date, setDate ] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;