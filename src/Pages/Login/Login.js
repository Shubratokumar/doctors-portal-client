import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from './../Shared/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast from "react-hot-toast";

const Login = () => {
  const [ email, setEmail] = useState("");
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleEmail = e =>{
    setEmail(e.target.value);
  }

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(()=>{
    if (gUser || user) {
      navigate(from, { replace: true });
      console.log(gUser || user);
    }
  },[user, gUser, from, navigate])

  let signInError;

  if(error || gError){
    signInError = <p className="text-red-500"><small>{error?.message || gError?.message}</small></p>
  }

  if( loading || gLoading){
      return <Loading></Loading>

  }
  const onSubmit = (data) =>{
      console.log(data);
      signInWithEmailAndPassword(data.email, data.password); 
  } 

  const resetPassword = async() =>{
    if(email){
      await sendPasswordResetEmail(email)
      toast.success("Email Sent successfully !!!")
    }
    else{
      toast.error("Enter Your Email First !!!")
    }
  }

  
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-normal">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                name="email"
                onBlur={handleEmail}
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
                <span className="text-sm">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required ",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            
            <input className="btn w-full text-white text-base font-normal" type="submit" value="Login" />
          </form>
          <p className=" text-center text-xs pb-3 text-black">Forgot Password ? 
            <button onClick={resetPassword} className="btn btn-link text-xs font-normal text-secondary">Reset Password</button></p>
          <p className="text-sm text-center">New to Doctors Portal ? <Link to="/signup"><span className="text-secondary">Create New Account</span></Link></p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline ">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
