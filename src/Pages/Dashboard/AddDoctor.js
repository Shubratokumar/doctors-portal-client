import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading';
import { toast } from 'react-hot-toast';

const AddDoctor = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const {data: services, isLoading} = useQuery('services', ()=>
        fetch('http://localhost:5000/service')
        .then(res => res.json())
    )
    
    const imageStorageKey = 'b983ae1c3629cfc642edcb9df25e58a8';
    /******************************************************
     * 3 ways to store images
     * 1. Third party store(imagebb)
     * 2. Your Own Storage in your own server (file system)
     * 3. Store Database : MongoDB
     * 
     * YUP : to validate file - search : Yup file validation for react hook form
     *****************************************************/

    if(isLoading){
        return <Loading></Loading>
    }

    const onSubmit = async(data) =>{
        const image = data?.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result?.success){
                const imgUrl = result?.data?.url;
                const doctor = {
                    name : data.name,
                    email : data.email,
                    specialty : data.specialty,
                    img : imgUrl 
                }
                // send doctors data to database
                fetch('http://localhost:5000/doctor',{
                  method : "POST",
                  headers : {
                    "Content-Type" : "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  body : JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                  if(inserted?.insertedId){
                    toast.success("New Doctor Added !!!")
                    reset()
                  }
                  else{
                    toast.error("Failed to add  the doctor");
                  }
                  console.log("doctor", inserted);
                })
            }
        })
         
    }

    return (
        <div>
            <h2 className="text-2xl">Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required ",
                  },
                })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required ",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email ",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Specialist</span>
              </label>
              <select {...register("specialty")} class="select select-bordered w-full max-w-lg mb-5">
                  {
                      services?.map(service => <option
                      key={service._id}
                      value={service.name}
                      >{service.name}</option>)
                  }
                </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Photo</span>
              </label>
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is required ",
                  },
                })}
                type="file"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <input className="btn w-full max-w-xs text-white text-base font-normal" type="submit" value="Add" />
          </form>
        </div>
    );
};

export default AddDoctor;