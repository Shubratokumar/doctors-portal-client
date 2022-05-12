import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = event =>{
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(_id, name,slot, date);
    // set null to close the modal
      setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-semibold text-lg text-secondary mb-8">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              value={format(date, "PP")}
              className="input input-bordered input-primary w-full max-w-lg mb-5"
              disabled
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-lg mb-5"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-primary w-full max-w-lg mb-5"
            />
            <input
              name="number"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered input-primary w-full max-w-lg mb-5"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-lg mb-5"
            />
            <input
              type="submit"
              value="Submit"
              className="btn w-full max-w-lg text-base font-normal"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
