import React from "react";
import AboveSelector from "./AboveSelector";
import From from "./From";
import To from "./To";
import Departure from "./Departure";
import Return from "./Return";
import BelowSelector from "./BelowSelector";



function Flight() {
  return (
    <div className="h-300 w-80 bg-blue-400">
      <div className="bg-white h-auto py-3 px-9 w-300 mx-10 mt-[-2em] z-[-4] pt-15 rounded-3xl ">
        <AboveSelector/>
        <div className=" py-2 flex flex-row">
        <From/>
        <To/>
        <Departure/>
        <Return/>

        </div>
       
        <BelowSelector/>
      </div>
    </div>
  );
}

export default Flight;
