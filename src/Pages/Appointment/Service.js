import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <section className="px-5">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl items-center">
        <div className="card-body text-center">
          <h2 className="text-center text-xl text-secondary font-semibold">
            {name}
          </h2>
          <p className="text-sm">
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try Another Date</span>
            )}
          </p>
          <p className="uppercase text-xs">
            {slots.length}{" "}
            {slots.length > 1 ? "spaces available" : "space available"}
          </p>
          <div className="card-actions justify-center mt-5">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(service)}
              htmlFor="booking-modal"
              className="btn modal-button btn-secondary text-white"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
