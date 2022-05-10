import React from "react";
import chair from "../../Assets/images/chair.png";
import bg from "../../Assets/images/bg.png"


const Banner = () => {
  return (
    <div class="hero min-h-screen mb-28 " style={{background: `url(${bg})`}}>
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt=""
        />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
