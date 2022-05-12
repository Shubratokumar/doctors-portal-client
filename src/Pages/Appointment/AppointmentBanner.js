import React from "react";
import chair from "../../Assets/images/chair.png";
import bg from "../../Assets/images/bg.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";

const AppointmentBanner = ({date, setDate}) => {
  
  return (
    <section >
      <div 
        style={{background: `url(${bg})`}}
      class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
            alt="Chair"
          />
          <div className="px-14 lg:px-24">
            <DayPicker 
            mode="single"
            selected={date}
            onSelect={setDate}
            />
          <p>You have picked {format(date, 'PP')}.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
