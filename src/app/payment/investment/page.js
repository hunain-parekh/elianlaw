"use client";
import React from "react";
import checkIco from "@/assets/images/checkIco.svg";
import Image from "next/image";
import { checkout } from "@/checkout";

const InvestmentPayment = () => {
  return (
    <div className="paymentPage">
      <div className="banner">
        <div className="container">
          <h1>Investment Visas</h1>
        </div>
      </div>

      <div className="accordion" id="myAccordion">
        <div className="accordion-item">
          <div className="planMain">
            <div className="container">
              <div
                className="mb-4 accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <div className="w-100">
                  <div className="mHeading">EB5</div>
                </div>
              </div>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#myAccordion"
              >
                <div className="description">
                  {/* <ul>
                        <li>I a BP needed, then it would be $3500. if you choose to invest in a regional plan ($800k), the regional center will provide you with the business plan and other nesessory project documents.</li>
                        <li>If you want to direct investment ($1.8M), then you will need to set up a business entity fee.</li>
                    </ul> */}
                  <h5>
                    I a BP needed, then it would be $3500. if you choose to
                    invest in a regional plan ($800k), the regional center will
                    provide you with the business plan and other nesessory
                    project documents.
                  </h5>
                  <h5>
                    If you want to direct investment ($1.8M), then you will need
                    to set up a business entity fee.
                  </h5>
                  <h5>Filing Fee for I-526 : $3675</h5>
                  <h5>Filing Fee for I-485 : $1140</h5>
                  <h5>Filing Fee for AOS : $445</h5>
                  <h5>Filing Fee for I-829 : $3750</h5>
                  <h5>Biometric Fee: each person $85</h5>
                  <h5>
                    Administration fees range from $50,000 to $70,000 depending
                    on the Regional Center.
                  </h5>
                </div>
                <div className="row">
                  <div className="col mb-4">
                    <div className="planCardMain">
                      <div className="planCard">
                        <div className="head">Plan years / 2+month</div>
                        <div className="cardMain">
                          <div className="mb-4">
                            <div className="price">{plan1.price}</div>
                            <div className="time">{plan1.time}</div>
                          </div>
                          {plan1.description.map((item, key) => (
                            <div
                              key={key}
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
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
                                  price: "price_1P1eo4RpSBYSRDXF8TL3zB24",
                                  quantity: 1,
                                },
                              ],
                            });
                          }}
                        >
                          $1041 monthly
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container">
                  <div className="mb-4">
                    <div className="mHeading1">E2 Visa</div>
                </div>

                </div> */}

          <div className="planMain">
            <div className="container">
              <div
                className="mb-4 accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                <div className="w-100">
                  <div className="mHeading">E2 Visa</div>
                </div>
              </div>

              <div
                id="collapseTwo"
                className="accordion-collapse collapse "
                data-bs-parent="#myAccordion"
              >
                <div className="description">
                  <h5>The USCIS filing fee: $960</h5>
                  <h5>The USCIS expedited fee for I-907: $2500</h5>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="planCardMain">
                      <div className="planCard">
                        <div className="head">Plan 1 ( 3 month )</div>
                        <div className="cardMain">
                          {case2.plan1.description.map((item, key) => (
                            <div
                              key={key}
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
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
                                  price: "price_1P1epbRpSBYSRDXF4s4wcwbP",
                                  quantity: 1,
                                },
                              ],
                            });
                          }}
                        >
                          $1500 monthly <br /> total $4500{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="planCardMain">
                      <div className="planCard">
                        <div className="head">Plan 2 ( 3 month )</div>
                        <div className="cardMain">
                          {case2.plan2.description.map((item, key) => (
                            <div
                              key={key}
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
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
                                  price: "price_1P1epvRpSBYSRDXF0uuwhjPm",
                                  quantity: 1,
                                },
                              ],
                            });
                          }}
                        >
                          $1083 monthly <br /> total $6499{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="planCardMain">
                      <div className="planCard">
                        <div className="head">Plan 3 ( 12 month )</div>
                        <div className="cardMain">
                          {case2.plan3.description.map((item, key) => (
                            <div
                              key={key}
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
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
                                  price: "price_1P1eqERpSBYSRDXF3Rgu0rJr",
                                  quantity: 1,
                                },
                              ],
                            });
                          }}
                        >
                          $541 monthly <br /> total $6999{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <h4 className='discount'>
                  Expedited Process All Upfront for $5850 (10% discount)
                </h4> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPayment;

const plan1 = {
  description: [
    {
      title: "Unlimited Legal Advice",
    },
    {
      title: "Unlimited Documents Review",
    },
    {
      title: "Final Business Plan Review",
    },
    {
      title: "Final Applications Review",
    },
  ],
};

const case2 = {
  plan1: {
    description: [
      {
        title: "Unlimited Legal Advice",
      },
      {
        title: "Unlimited Documents Review",
      },
      {
        title: "Final Business Plan Review ",
      },
      {
        title: "Final Applications Review",
      },
    ],
  },
  plan2: {
    description: [
      {
        title: "Unlimited Legal Advice",
      },
      {
        title: "Unlimited Documents Review",
      },
      {
        title: "Writing Business Plan ($1000) ",
      },
      {
        title: "Establishing a US Company ($1500)",
      },
      {
        title: "Filing the Case",
      },
      {
        title: "Inquiries from USCIS and NVC",
      },
      {
        title: "Strategic Guidence in Your Case",
      },
      {
        title: "Responding to RFEs",
      },
      {
        title: "Appeal the Case",
      },
      {
        title: "Proactive Legal Protection",
      },
    ],
  },
  plan3: {
    description: [
      {
        title: "Unlimited Legal Advice",
      },
      {
        title: "Unlimited Documents Review",
      },
      {
        title: "Writing Business Plan ($1000) ",
      },
      {
        title: "Establishing a US Company ($1500)",
      },
      {
        title: "Filing the Case",
      },
      {
        title: "Inquiries from USCIS and NVC",
      },
      {
        title: "Strategic Guidence in Your Case",
      },
      {
        title: "Responding to RFEs",
      },
      {
        title: "Appeal the Case",
      },
      {
        title: "Proactive Legal Protection",
      },
    ],
  },
};
