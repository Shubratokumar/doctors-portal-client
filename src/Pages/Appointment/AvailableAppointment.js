import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/service")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='pt-14 lg:pt-24'>
            <h4 className='text-2xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24'>
                {
                    services.map(service =><Service 
                        key={service._id} 
                        service={service}
                        setTreatment={setTreatment}
                        ></Service>)
                }
            </div>
            {
                treatment && <BookingModal 
                date={date} 
                treatment={treatment} 
                setTreatment={setTreatment}
                ></BookingModal>
            }      
        </div>
    );
};

export default AvailableAppointment;