import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;
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
          <input
            type="text"
            value={format(date, "PP")}
            class="input input-bordered input-primary w-full max-w-lg mb-5"
            disabled
          />
          <input
            type="text"
            value={slots[0]}
            class="input input-bordered input-primary w-full max-w-lg mb-5"
            disabled
          />
          <input
            type="text"
            placeholder="Full Name"
            class="input input-bordered input-primary w-full max-w-lg mb-5"
          />
          <input
            type="number"
            placeholder="Phone Number"
            class="input input-bordered input-primary w-full max-w-lg mb-5"
          />
          <input
            type="email"
            placeholder="Email"
            class="input input-bordered input-primary w-full max-w-lg mb-5"
          />
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn w-full max-w-lg">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
