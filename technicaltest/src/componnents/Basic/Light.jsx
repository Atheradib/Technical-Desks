// import React, { useState } from "react";
import React, { useState } from "react";

const Light = () => {
  const [bulb, setBulb] = useState("on");
  return (
    <div>
      <img
        src={`bulb${bulb}.png`}
        width="100px"
        onClick={() => (bulb === "off" ? setBulb("on") : setBulb("off"))}
      ></img>
    </div>
  );
};

export default Light;

// dont forget to right self call function whenever you are writing any event in react
