import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    if(user){
        console.log(user)
    }
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-normal">Login</h2>
          <div class="divider">OR</div>
          <button onClick={()=>signInWithGoogle()} class="btn btn-outline ">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
