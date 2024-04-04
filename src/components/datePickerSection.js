"use client";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Calendly from "./Calendly";
import { checkout } from "@/checkout";

export const DatePickerSection = () => {
  const [time, setTime] = useState("");
  return (
    <section className="dateSec">
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <div className="timeMain">
            <div className="timeSelect">
                <button
                  className={time == "30 mins" ? "active" : ""}
                  onClick={() => {
                    setTime("30 mins")
                    checkout({
                      lineItems:[{price:'price_1OzdbERpSBYSRDXFcsa8D9UK',quantity:1}]
                    })
                  }}
                >
                  Pay $150 for 30 Mins
                </button>
            </div>
            <button
              onClick={()=>{
                checkout({
                  lineItems:[{price:'price_1OzdbERpSBYSRDXFcsa8D9UK',quantity:1}]
                })
              }}
              className="makePay"
            >
              Make Payment To Confirm Your Appointment
            </button>
          </div>
        </div>

        <div className="col-lg-4 col-md-5">
          <div>
            <h4 className="schapp">Schedule Appointment</h4>
          </div>
          <div>
            <Calendly id="calendly-div" />
          </div>
        </div>
      </div>
    </section>
  );
};
