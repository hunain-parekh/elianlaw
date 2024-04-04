"use client";
import React from "react";
import checkIco from "@/assets/images/checkIco.svg";
import Image from "next/image";
import { checkout } from "@/checkout";

const AssylumPayment = () => {
  return (
    <div className="paymentPage">
      <div className="banner">
        <div className="container">
          <h1>Asylum</h1>
        </div>
      </div>
      <div className="planMain">
        <div className="container">
          <div className="mb-4">
            <div className="mHeading">Asylum and Refugee</div>
          </div>
          <div className="description">
            <h5>No Filing Fee</h5>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="planCardMain">
                <div className="planCard">
                  <div className="head">Plan 1 ( 3 months )</div>
                  <div className="cardMain">
                    {plan1.description.map((item, key) => (
                      <div
                        className={item?.title ? "poinM" : "poinM jc-center"}
                        key={key}
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
                            price: "price_1P1ekyRpSBYSRDXFILKy9HdZ",
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                  >
                    $266 monthly
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="planCardMain">
                <div className="planCard">
                  <div className="head">Plan 2 ( 3 months )</div>
                  <div className="cardMain">
                    <div className="mb-4">
                      <div className="price">{plan2.price}</div>
                      <div className="time">{plan2.time}</div>
                    </div>
                    {plan2.description.map((item, key) => (
                      <div
                        className={item?.title ? "poinM" : "poinM jc-center"}
                        key={key}
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
                            price: "price_1P1elhRpSBYSRDXFFTtimJv5",
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                  >
                    $333 monthly
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="planCardMain">
                <div className="planCard">
                  <div className="head">Plan 3 ( 6 months )</div>
                  <div className="cardMain">
                    <div className="mb-4">
                      <div className="price">{plan3.price}</div>
                      <div className="time">{plan3.time}</div>
                    </div>
                    {plan3.description.map((item, key) => (
                      <div
                        className={item?.title ? "poinM" : "poinM jc-center"}
                        key={key}
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
                <div className="text-center">
                  <button
                    className="planBtn mt-4"
                    onClick={() => {
                      checkout({
                        mode: "subscription",
                        lineItems: [
                          {
                            price: "price_1P1emZRpSBYSRDXFQrslfYQe",
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                  >
                    $500 monthly
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h4 className="discount">
            The price are flat fee. It may increase due to complexity of your
            case.
          </h4>
          <h4 className="discount">All prices up front get 10% discount.</h4>
          <div className="btns-after">
            <div className="dist-btn1">
              <button
                className="planBtn"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1P1elORpSBYSRDXFilHLMnQz",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                $718 (After Discount)
              </button>
            </div>
            <div className="dist-btn2">
              <button
                className="planBtn"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1P1emBRpSBYSRDXF4x8JKL3d",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                $899 (After Discount)
              </button>
            </div>
            <div className="dist-btn3">
              <button
                className="planBtn"
                onClick={() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1P1enERpSBYSRDXF0bDUUTty",
                        quantity: 1,
                      },
                    ],
                  });
                }}
              >
                $2700 (After Discount)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssylumPayment;

const plan1 = {
  description: [
    {
      title: "Unlimited Legal Advice",
    },
    {
      title: "Unlimited Document Review",
    },
    {
      title: "Final Application Review",
    },
  ],
};
const plan2 = {
  description: [
    {
      title: "Unlimited Legal Advice",
    },
    {
      title: "Unlimited Document Review",
    },
    {
      title: "Filing The Case",
    },
    {
      title: "Inquiring from the USCIS",
    },
    {
      title: "Strategic Guidance throughout Your Case",
    },
  ],
};
const plan3 = {
  description: [
    {
      title: "Unlimited Legal Advice",
    },
    {
      title: "Unlimited Document Review",
    },
    {
      title: "Filing The Case",
    },
    {
      title: "Inquiring from the USCIS",
    },
    {
      title: "Strategic Guidance throughout Your Case",
    },
    {
      title: "Responding To RFE",
    },
    {
      title: "Appeal The Case",
    },
    {
      title: "Proactive Legal Protection",
    },
  ],
};
