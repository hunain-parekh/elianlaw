"use client";
import React from "react";
import checkIco from "@/assets/images/checkIco.svg";
import Image from "next/image";
import { checkout } from "@/checkout";

const WorkPayment = () => {
  return (
    <div className="paymentPage">
      <div className="banner">
        <div className="container">
          <h1>Work Visas</h1>
        </div>
      </div>

      <div class="accordion" id="myAccordion">
        <div class="accordion-item">
          {/* case 1 */}
          <div className="planMain">
            <div className="container">
              <div
                className="mb-4 accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <div className="w-100">
                  {/* <div className="mHeading">Work Visa</div> */}
                  <div className="mHeading">H1B Visa</div>
                </div>
              </div>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#myAccordion"
              >
                <div className="description">
                  <h5>The USCIS application fee is $1710 </h5>
                  <h5>
                    The USCIS filing fee for expedited application (~15 days):
                    $2500
                  </h5>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="planCardMain">
                      <div className="planCard">
                        <div className="head">Plan 1 ( 3 months )</div>
                        <div className="cardMain">
                          {case1.plan1.description.map((item, key) => (
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
                                  price: "price_1P1er0RpSBYSRDXF4racQNbY",
                                  quantity: 1,
                                },
                              ],
                            });
                          }}
                        >
                          $1333 monthly <br /> total $3999
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div className="planCardMain">
                      <div className="planCard">
                        <div className="head">Plan 2 ( 6 months )</div>
                        <div className="cardMain">
                          {case1.plan2.description.map((item, key) => (
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
                                  price: "price_1P1erxRpSBYSRDXFeeaC9zbA",
                                  quantity: 1,
                                },
                              ],
                            });
                          }}
                        >
                          $666 monthly <br /> total $3996
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="discount">
                  Expedited Process All Upfront for $3600 (10% discount)
                </h4>

                <div className="btns-after-family2">
                  <div className="dist-btn1">
                    <button
                      className="planBtn"
                      onClick={() => {
                        checkout({
                          lineItems: [
                            {
                              price: "price_1P1erVRpSBYSRDXFIX5SchCn",
                              quantity: 1,
                            },
                          ],
                        });
                      }}
                    >
                      $3599 (After Discount)
                    </button>
                  </div>
                  <div className="dist-btn2">
                    <button
                      className="planBtn"
                      onClick={() => {
                        checkout({
                          lineItems: [
                            {
                              price: "price_1P1esPRpSBYSRDXFSwJiYsbo",
                              quantity: 1,
                            },
                          ],
                        });
                      }}
                    >
                      $3596 (After Discount)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* case 2 */}

          {/* <div className="container">
    <hr className="grey-line" />
    </div> */}

          <div className="planMain">
            <div className="container">
              <div
                className="mb-4 accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                <div className="w-100">
                  {/* <div className="mHeading">Work Visa</div> */}
                  <div className="mHeading">L1 Visa</div>
                </div>
              </div>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse show"
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
                        <div className="head">Plan 1 ( 3 months )</div>
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
                                  price: "price_1P1etDRpSBYSRDXFniBrNYn8",
                                  quantity: 1,
                                },
                              ],
                            });
                          }}
                        >
                          $1000 monthly <br /> total $3000{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="planCardMain">
                      <div className="planCard">
                        <div className="head">Plan 2 ( 6 months )</div>
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
                                  price: "price_1P1evVRpSBYSRDXFF15NBBVf",
                                  quantity: 1,
                                },
                              ],
                            });
                          }}
                        >
                          $1000 monthly <br /> total $6000{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="planCardMain">
                      <div className="planCard">
                        <div className="head">Plan 3 ( 12 months )</div>
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
                                  price: "price_1P1ewORpSBYSRDXFCdWUUnWH",
                                  quantity: 1,
                                },
                              ],
                            });
                          }}
                        >
                          $500 monthly <br /> total $6000{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="discount">
                  Expedited Process All Upfront for $5400 (10% discount)
                </h4>

                <div className="btns-after">
                  <div className="dist-btn1">
                    <button
                      className="planBtn"
                      onClick={() => {
                        checkout({
                          lineItems: [
                            {
                              price: "price_1P1etlRpSBYSRDXFm6sUroSX",
                              quantity: 1,
                            },
                          ],
                        });
                      }}
                    >
                      $2700 (After Discount)
                    </button>
                  </div>
                  <div className="dist-btn2">
                    <button
                      className="planBtn"
                      onClick={() => {
                        checkout({
                          lineItems: [
                            {
                              price: "price_1P1evwRpSBYSRDXFkbY6Qhmf",
                              quantity: 1,
                            },
                          ],
                        });
                      }}
                    >
                      $5400 (After Discount)
                    </button>
                  </div>
                  <div className="dist-btn3">
                    <button
                      className="planBtn"
                      onClick={() => {
                        checkout({
                          lineItems: [
                            {
                              price: "price_1P1ewlRpSBYSRDXFsnldKdaS",
                              quantity: 1,
                            },
                          ],
                        });
                      }}
                    >
                      $5400 (After Discount)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPayment;

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
        title: "Filing the case",
      },
      {
        title: "Inquiry form the USCIS",
      },
      {
        title: "Strategic Guidance in your case.",
      },
      {
        title: "Responding to RFES",
      },
      {
        title: "Appeal The Case",
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
        title: "Filing the case",
      },
      {
        title: "Inquiry form the USCIS",
      },
      {
        title: "Strategic Guidance in your case.",
      },
      {
        title: "Responding to RFES",
      },
      {
        title: "Appeal The Case",
      },
      {
        title: "Proactive Legal Protection",
      },
    ],
  },
};
const case2 = {
  plan1: {
    description: [
      {
        title: "Unlimited Legal Advice",
      },
      {
        title: "Basic Document Review",
      },
      {
        title: "Final Application Review",
      },
      {
        title: "Final Consular Processing Review",
      },
    ],
  },
  plan2: {
    description: [
      {
        title: "Unlimited Legal Advice",
      },
      {
        title: "Basic Document Review",
      },
      {
        title: "Filing the case",
      },
      {
        title: "Inquiry form the USCIS",
      },
      {
        title: "Inquiry form NVC",
      },
      {
        title: "Responding to RFEs",
      },
      {
        title: "Appeal The Case",
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
        title: "Basic Document Review",
      },
      {
        title: "Filing the case",
      },
      {
        title: "Inquiry form the USCIS",
      },
      {
        title: "Inquiry form NVC",
      },
      {
        title: "Responding to RFEs",
      },
      {
        title: "Appeal The Case",
      },
      {
        title: "Proactive Legal Protection",
      },
    ],
  },
};
