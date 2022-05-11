import React from 'react';
import Cavity from "../../Assets/images/cavity.png";
import Flouride from "../../Assets/images/fluoride.png"
import Whitening from "../../Assets/images/whitening.png"
import Service from './Service';

const Services = () => {
    const services = [
        {
            "_id": 1,
            "image": `${Flouride}`,
            "title" : "Fluoride Treatment",
            "description" : ""
        },
        {
            "_id": 2,
            "image": `${Cavity}`,
            "title" : "Cavity Filling",
            "description" : ""
        },
        {
            "_id": 3,
            "image": `${Whitening}`,
            "title" : "Teeth Whitening",
            "description" : ""
        },
    ]
    return (
        <section className='px-12'>
            <div>
                <div className='text-center mb-20'>
                    <h5 className='text-xl font-bold font-sans pb-2 text-primary'>OUR SERVICES</h5>
                    <h2 className='text-4xl'>Services We Provide</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>            
            </div>
        </section>
    );
};

export default Services;