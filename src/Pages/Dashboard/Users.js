import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { isLoading, data: users, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/user",{
        method: "GET",
        headers:{
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then((res) => res.json())
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
              <th>Email</th>
              <th>Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => <UserRow 
                user={user}  
                key={user._id}
                index={index}
                refetch={refetch}
                ></UserRow> )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
