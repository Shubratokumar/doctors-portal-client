import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const phone = event.target.phone.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      patientEmail: user.email,
      patientName: user.displayName,
      price,
      slot,
      phone,
    };
    // data send to the database
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Appointment is set ${formattedDate} at ${slot}.`);
        } else {
          toast.error(
            `Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        // set null to close the modal
        setTreatment(null);
      });
  };
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
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              value={user?.displayName}
              className="input input-bordered input-primary w-full max-w-lg mb-5"
            />
            <input
              name="email"
              type="email"
              disabled
              value={user?.email}
              className="input input-bordered input-primary w-full max-w-lg mb-5"
            />
            <input
              name="price"
              type="number"
              disabled
              value={price}
              className="input input-bordered input-primary w-full max-w-lg mb-5"
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
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
