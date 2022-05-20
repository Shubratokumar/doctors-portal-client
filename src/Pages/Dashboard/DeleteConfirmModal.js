import React from 'react';
import { toast } from 'react-hot-toast';

const DeleteConfirmModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {
    const {name, email} = deletingDoctor;

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
                setDeletingDoctor(null);
                refetch();
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}!</h3>
                <p className="py-4">
                    Once you remove {name}. His or her information will be removed from UI as well as Database. So, think once before removing {name}.
                </p>
                <div className="modal-action">
                <button onClick={()=>confirmDelete(email)} className="btn btn-xs btn-error">Remove Doctor</button>  
                <label for="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;