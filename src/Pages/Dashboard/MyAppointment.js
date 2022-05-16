import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    if (email) {
      const url = `https://nameless-cliffs-91831.herokuapp.com/booking?patientEmail=${email}`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            toast.error(`${res.statusText}`);
            signOut(auth);
            localStorage.removeItem("accessToken");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-normal w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((a, index) => (
              <>
                <tr key={a._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{a.patientName}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                  <td>{a.treatment}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
