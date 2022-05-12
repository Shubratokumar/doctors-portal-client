import React from "react";

const Service = ({ service }) => {
    const {name, slots} = service;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
