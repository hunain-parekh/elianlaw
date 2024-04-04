"use client";
import React from "react";
import checkIco from "@/assets/images/checkIco.svg";
import Image from "next/image";
import { checkout } from "@/checkout";

const StudentVisaPayment = () => {
  return (
    <div className="paymentPage">
      <div className="banner">
        <div className="container">
          <h1>Student Visa</h1>
        </div>
      </div>
      {/* case 1 */}
      <div className="planMain">
        <div className="container">
          <div className="mb-4">
            <div className="mHeading">Student Visa</div>
          </div>
          <div className="description">
            <h5>Filing Fee depends on each category</h5>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="planCardMain">
                <div className="planCard">
                  <div className="head">Plan 1 ( Monthly )</div>
                  <div className="cardMain">
                    {case1.plan1.description.map((item, key) => (
                      <div
                        key={key}
                        className={item?.title ? "poinM" : "poinM jc-center"}
                      >
                        <div className="check">
                          <Image src={checkIco} alt="" />
                        </div>
                        <div>
                          <div className="title">{item?.title}</div>
                          <div className="detail">{item?.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="planBtn"
                    onClick={() => {
                      checkout({
                        lineItems: [
                          {
                            price: "price_1P1dN2RpSBYSRDXFIajCVl3N",
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                  >
                    $200 monthly{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="planCardMain">
                <div className="planCard">
                  <div className="head">Plan 2 (6 months )</div>
                  <div className="cardMain">
                    {case1.plan2.description.map((item, key) => (
                      <div
                        key={key}
                        className={item?.title ? "poinM" : "poinM jc-center"}
                      >
                        <div className="check">
                          <Image src={checkIco} alt="" />
                        </div>
                        <div>
                          <div className="title">{item?.title}</div>
                          <div className="detail">{item?.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="planBtn"
                    onClick={() => {
                      checkout({
                        mode: "subscription",
                        lineItems: [
                          {
                            price: "price_1P1dNaRpSBYSRDXFjMEEld1t",
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                  >
                    $333 monthly <br /> total $1998
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h4 className="discount">
            Expedited Process All Upfront for 10% Discount.
          </h4>

          <div className="btns-after-family2">
            <div className="dist-btn1">
              <button className="planBtn">(No Discount)</button>
            </div>
            <div className="dist-btn2">
              <button
                className="planBtn"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1P1dNvRpSBYSRDXFczibI7Tl",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                $1798 (After Discount)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentVisaPayment;
const case1 = {
  plan1: {
    description: [
      {
        title: "Unlimited Legal Advice",
      },
      {
        title: "Unlimited Document Review",
      },
      // {
      //     title:"Help with community with US institutions (limit 3)",
      // },
      {
        title: "Review the final University Application",
      },
    ],
  },
  plan2: {
    description: [
      {
        title: "Unlimited Legal Advice",
      },
      {
        title: "Unlimited Document Review",
      },
      {
        title: "Help with community with US Institutions (limit 3)",
      },
      {
        title: "Get Addmission to a US Institution & University. ",
      },
      {
        title: "Pay the SEVIS Fee (This Fee is Separate)",
      },
      {
        title: "Consular Processing: File Visa Application",
      },
      {
        title: "Guide You through Interview",
      },
      {
        title: "Answer Your Questions about Your Move to US.",
      },
    ],
  },
};
