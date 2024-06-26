"use client";
import React from "react";
import checkIco from "@/assets/images/checkIco.svg";
import Image from "next/image";
import { checkout } from "@/checkout";

const DacaPayment = () => {
  return (
    <div className="paymentPage">
      <div className="banner">
        <div className="container">
          <h1>DACA</h1>
        </div>
      </div>
      {/* case 1 */}
      <div className="planMain">
        <div className="container">
          <div className="mb-4">
            <div className="mHeading">DACA</div>
          </div>
          <div className="description">
            <h5>The USCIS filing fee: $495 (plus biometric fees for $85)</h5>
            <h5>DACA Renewal: Attorney&rsquo;s fee $500</h5>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="planCardMain">
                <div className="planCard">
                  <div className="head">Plan 1 ( 3 months )</div>
                  <div className="cardMain">
                    {case1.plan1.description.map((item, key) => (
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
                            price: "price_1P1d6NRpSBYSRDXF243ei893",
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                  >
                    $299 monthly <br /> total $897{" "}
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
                            price: "price_1P1d7yRpSBYSRDXFRBTXEjcZ",
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                  >
                    $208 monthly <br /> total $1248
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h4 className="discount">Our fees for DACA Renewal $500</h4>
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
                      { price: "price_1P1d7RRpSBYSRDXFWUfpwWZo", quantity: 1 },
                    ],
                  });
                }}
              >
                $807 (After Discount)
              </button>
            </div>
            <div
              className="dist-btn2"
              onClick={() => {
                checkout({
                  lineItems: [
                    { price: "price_1P1d8YRpSBYSRDXFtjPRnpkL", quantity: 1 },
                  ],
                });
              }}
            >
              <button className="planBtn">$1123 (After Discount)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DacaPayment;

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
        title: "Final Application Review",
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
        title: "Gather All the Documentation",
      },
      {
        title: "File the Case",
      },
      {
        title: "Inquiry form the USCIS",
      },
      {
        title: "Respond to RFEs",
      },
      {
        title: "Appeal the Case",
      },
      {
        title: "Strategic Guidance in Your Case",
      },
      {
        title: "Proactive Legal Protection",
      },
    ],
  },
};
