import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const serviceData = [
    {
      //   image: flight,
      purpose: "Flights",
      link: "flights",
    },
    {
      //   image: hotel,
      purpose: "Hotels",
      link: "hotels",
    },
    {
      //   image: cab,
      purpose: "Cabs",
      link: "cabs",
    },
    {
      //   image: homestay,
      purpose: "Homestays & Villa",
      link: "homestay",
    },
    {
      //   image: card,
      purpose: "Forex Card",
      link: "card",
    },
    {
      //   image: insurance,
      purpose: "Travel Insurance",
      link: "insurance",
    },
    {
      //   image: train,
      purpose: "Trains",
      link: "train",
    },
    {
      //   image: bus,
      purpose: "Buses",
      link: "bus",
    },
    {
      //   image: holiday,
      purpose: "Holiday packages",
      link: "holiday",
    },
  ];

  return (
    <Link to="/">
      <div>
        <Link to="/flights">
          <div className="static h-50 w-230 bg-cyan-50">
            <div className="w-[73%] bg-white h-25 rounded-xl mx-50 mt-30 absolute">
              <div className="pl-3 h-23 w-230 bg-white rounded-lg gap-3 flex drop-shadow-xl">
                {serviceData.map((elem, index) => (
                  <NavLink
                    to={elem.link}
                    className={({ isActive }) =>
                      ` ${isActive ? "text-blue-500" : " "}`
                    }
                  >
                    <div className="h-full w-auto ">
                      <img
                        className=" h-7 w-7 ml-1 place-self-center mt-2 "
                        src={elem.image}
                        alt={elem.purpose}
                      />
                      <p className=" font-mulish text-sm px-5 ml-1 py-2 font-semibold place-self-center leading-4 tracking-tight text-center">
                        {elem.purpose}
                      </p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Link>
  );
}

export default Header;
