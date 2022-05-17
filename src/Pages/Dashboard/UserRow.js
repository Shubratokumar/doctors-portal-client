import React from "react";
import { toast } from "react-hot-toast";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    const url = `https://nameless-cliffs-91831.herokuapp.com/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Faied to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          console.log(data);
          toast.success("Successfully Made an Admin");
        }
      });
  };
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>{<button className="btn btn-xs btn-error">Remove User</button>}</td>
    </tr>
  );
};

export default UserRow;
