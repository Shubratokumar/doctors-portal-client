import React from "react";
import Appointment from "../../Assets/images/appointment.png"
import PrimaryButton from './../Shared/PrimaryButton';

const Contact = () => {
  return (
    <section style={{background: `url(${Appointment})`}} >
      <div className="py-16">
        <div className="text-center mb-10">
          <h4 className="text-xl text-primary font-bold">Contact Us</h4>
          <h2 className="text-4xl text-white">Stay connected with us</h2>
        </div>
        <div className="flex flex-col text-center">
            <div className="mb-5">
                <input type="text" placeholder="Email Address" className="input input-bordered input-primary w-full max-w-sm md:max-w-md lg:max-w-lg" />
            </div>
            <div className="mb-5">
                <input type="text" placeholder="Address" className="input input-bordered input-primary w-full max-w-sm md:max-w-md lg:max-w-lg" />
            </div>
            <div className="mb-9">
                <textarea type="text" placeholder="Your Message" className="input input-bordered input-primary h-32 w-full max-w-sm md:max-w-md lg:max-w-lg" />
            </div>
        </div>
        <div className="text-center">
            <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
