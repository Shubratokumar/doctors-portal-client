import React from 'react';
import { toast } from 'react-hot-toast';

const DoctorRow = ({ doctor, index, refetch }) => {
    const {name, email, img, specialty } = doctor;

    const confirmDelete = (email) =>{
        const url = `http://localhost:5000/doctor/${email}`
        fetch(url, {
            method : "DELETE",
            headers : {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                toast.success(`Successfully removed ${name}.`)
                refetch()
            }
        })
    }
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                        <img src={img} alt='' />
                    </div>
                </div>
            </td>
            <td>{specialty}</td>
            <td>{<button onClick={()=>confirmDelete(email)} className="btn btn-xs btn-error">Remove Doctor</button>}</td>
        </tr>
    );
};

export default DoctorRow;