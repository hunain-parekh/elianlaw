"use client";
import React from "react";
import checkIco from "@/assets/images/checkIco.svg";
import Image from "next/image";
import { checkout } from "@/checkout";

const VawaPayment = () => {
  return (
    <div className="paymentPage">
      <div className="banner">
        <div className="container">
          <h1>VAWA</h1>
        </div>
      </div>
      {/* case 1 */}
      <div className="planMain">
        <div className="container">
          <div className="mb-4">
            <div className="mHeading">VAWA</div>
          </div>
          <div className="description">
            <h5>Filing Fee $435</h5>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="planCardMain">
                <div className="planCard">
                  <div className="head">Plan 1 ( 6 months )</div>
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
                        mode: "subscription",
                        lineItems: [
                          {
                            price: "price_1P1dAzRpSBYSRDXF7yXT7pIE",
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                  >
                    $666 monthly <br /> total $4000{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="planCardMain">
                <div className="planCard">
                  <div className="head">Plan 2 (12 months )</div>
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
                            price: "price_1P1dC2RpSBYSRDXFLC4Gjnd0",
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                  >
                    $333 monthly <br /> total $4000
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h4 className="discount">
            Expedited Process All Upfront for 10% discount.
          </h4>

          <div className="btns-after-family2">
            <div className="dist-btn1">
              <button
                className="planBtn"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1P1dBZRpSBYSRDXFhhp1nZ06",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                $3600 (After Discount)
              </button>
            </div>
            <div className="dist-btn2">
              <button
                className="planBtn"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1P1dCbRpSBYSRDXF42ApDmiZ",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                $3600 (After Discount)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VawaPayment;

const case1 = {
  plan1: {
    description: [
      {
        title: "Unlimited Legal Advice",
      },
      {
        title: "Unlimited Document Review",
      },
      {
        title: "Gather all the documentation",
      },
      {
        title: "File the case",
      },
      {
        title: "Inquiry form the USCIS",
      },
      {
        title: "Respond to RFES",
      },
      {
        title: "Appeal the case",
      },
      {
        title: "Strategic Guidance in your case",
      },
      {
        title: "Proactive Legal Protection",
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
        title: "Gather all the documentation",
      },
      {
        title: "File the case",
      },
      {
        title: "Inquiry form the USCIS",
      },
      {
        title: "Respond to RFES",
      },
      {
        title: "Appeal the case",
      },
      {
        title: "Strategic Guidance in your case",
      },
      {
        title: "Proactive Legal Protection",
      },
    ],
  },
};
