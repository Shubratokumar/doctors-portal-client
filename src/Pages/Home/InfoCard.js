import React from "react";

const InfoCard = ({ img, cardText, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure className="p-3">
        <img src={img} alt="Info" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{cardTitle}</h2>
        <p className="text-white">{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
