import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
  const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-normal w-full">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Avatar</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <DoctorRow
                doctor={doctor}
                key={doctor._id}
                index={index}
                refetch={refetch}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
