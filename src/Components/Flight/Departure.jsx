import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { FaChevronDown } from "react-icons/fa";

const Departure = () => {
  const [startDate, setStartDate] = useState(new Date(12));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-60">
      {/* Button to Toggle Date Picker */}
      <div
        className="border-none drop-shadow-sm  p-2 cursor-pointer flex justify-between items-center bg-white "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <p className="text-gray-500 text-sm">Departure</p>
          <p className="text-xl font-bold">{format(startDate, "dd MMM'")}</p>
          <p className="text-gray-500">{format(startDate, "EEEE")}</p>
        </div>
        <FaChevronDown className="text-blue-500  "/>
      </div>

      {/* Date Picker */}
      {isOpen && (
        <div className="absolute mt-2 z-10 bg-white p-4 shadow-lg rounded-lg">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setIsOpen(false);
            }}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default Departure;

