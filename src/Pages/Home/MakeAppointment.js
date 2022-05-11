import React from "react";
import doctor from "../../Assets/images/doctor.png";
import PrimaryButton from "./../Shared/PrimaryButton";
import Appointment from "../../Assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${Appointment})` }}
      className="flex justify-center items-center mb-20"
    >
      <div className="flex-1 hidden lg:block">
        <img src={doctor} className="mt-[-120px]" alt="doctor" />
      </div>
      <div className="flex-1">
        <div className="p-4">
          <p className="text-xl text-primary font-bold">Appointment</p>
          <h1 className="text-4xl font-semibold text-white">
            Make an appointment Today
          </h1>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
