import React from 'react';


const DoctorRow = ({ doctor, index,  setDeletingDoctor }) => {
    const {name, email, img, specialty } = doctor;

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{specialty}</td>
            <td>
                <label onClick={()=>setDeletingDoctor(doctor)} for="delete-confirm-modal" className="btn modal-button btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;