'use client'
import React, { useEffect } from "react";

const Bootstrap = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.min.js");
    }
  }, []);
  return null;
};

export default Bootstrap;
