import React from 'react';
import quote from "../../Assets/icons/quote.svg";
import people1 from "../../Assets/images/people1.png";
import people2 from "../../Assets/images/people2.png";
import people3 from "../../Assets/images/people3.png";
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people1
        },
        {
            _id: 2,
            name: "Tailor Swift",
            review: "",
            location: "Washington DC",
            img: people2
        },
        {
            _id: 3,
            name: "Adam Carry",
            review: "",
            location: "New York",
            img: people3
        },
    ]
    return (
        <section className='my-28 px-12'>
            <div className='flex justify-between pb-20'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div className='pl-5'>
                    <img className='w-24 lg:w-48' src={quote} alt="qoute" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>        
        </section>
    );
};

export default Testimonials;