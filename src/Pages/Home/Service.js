import React from "react";

const Service = ({ service }) => {
    const { image,title } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl mb-20">
      <figure class="px-10 pt-10">
        <img
          src={image}
          alt="service"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
  );
};

export default Service;
