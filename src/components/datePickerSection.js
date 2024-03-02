"use client";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import StripeCheckout from "react-stripe-checkout";
import Calendly from "./Calendly";

export const DatePickerSection = ({ paymentPagePath }) => {
  const [time, setTime] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  console.log(process.env.REACT_APP_STRIPE_PRIVATE_KEY);
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <section className="dateSec">
      <div className="row">
        <div className="col-lg-8 col-md-7">
          <div className="timeMain">
            {/* <div className="head">Select Time</div> */}
            <div className="timeSelect">
              <StripeCheckout
                name="Lexom Law"
                token={onToken}
                stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                amount={150 * 100}
                currency="USD"
              >
                <button
                  className={time == "30 mins" ? "active" : ""}
                  onClick={() => setTime("30 mins")}
                >
                  Pay $150 for 30 Mins
                </button>
              </StripeCheckout>
              {/* <button className={time == "1 hour" ? "active":""} onClick={()=>setTime("1 hour")}>1 Hour</button> */}
            </div>
            <StripeCheckout
              name="Lexom Law"
              token={onToken}
              stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
              amount={150 * 100}
              currency="USD"
            >
              <Link
                href={paymentPagePath ? paymentPagePath : ""}
                className="makePay"
              >
                Make Payment To Confirm Your Appointment
              </Link>
            </StripeCheckout>
          </div>
        </div>

        <div className="col-lg-4 col-md-5">
          {/* <div className="datePicMain">
                    <div className="head">Select Your Date</div>
                    <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    />
                </div> */}
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
