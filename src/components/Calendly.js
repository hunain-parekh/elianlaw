"use client"
import React, { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

import { PopupButton } from "react-calendly";

const Calendly = () => {
  const [rootElement,setRootElement] = useState(null);
  useEffect(()=>{
    const body = document.getElementById("root");
    setRootElement(body);
  },[setRootElement])
  return (
    <>
      <PopupButton
        className="calendly-color"
        url="https://calendly.com/nomanahmed1919"
        text="Click here to schedule!"
        rootElement={rootElement}
      />
    </>
  );
};

export default Calendly;
