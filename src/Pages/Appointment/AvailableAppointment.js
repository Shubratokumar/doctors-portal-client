import React from "react";
import { format } from "date-fns";
import { useState } from "react";
import Service from "./Service";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://nameless-cliffs-91831.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //     fetch(`https://nameless-cliffs-91831.herokuapp.com/available?date=${formattedDate}`)
  //     .then(res => res.json())
  //     .then(data => setServices(data))
  // }, [formattedDate])
  return (
    <div className="pt-14 lg:pt-24">
      <h4 className="text-2xl text-secondary text-center">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-24">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
