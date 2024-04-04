"use client";
import React from "react";
import checkIco from "@/assets/images/checkIco.svg";
import StripeCheckout from "react-stripe-checkout";
import Image from "next/image";
import { checkout } from "@/checkout";

const NaturalizationPayment = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className='paymentPage'>
      <div className='banner'>
        <div className='container'>
          <h1>Naturalization and Obtaining Citizenship</h1>
        </div>
      </div>
      {/* case 1 */}
      <div className='planMain'>
        <div className='container'>
          <div className='mb-4'>
            <div className='mHeading'>Naturalization</div>
          </div>
          <div className='description'>
            <h5>Filing Fee = N-400($640)</h5>
            <h5>Biometrics Fee $80</h5>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='planCardMain'>
                <div className='planCard'>
                  <div className='head'>Plan 1 ( Monthly )</div>
                  <div className='cardMain'>
                    {case1.plan1.description.map((item, key) => (
                      <div
                        key={key}
                        className={item?.title ? "poinM" : "poinM jc-center"}
                      >
                        <div className='check'>
                          <Image src={checkIco} alt='' />
                        </div>
                        <div>
                          <div className='title'>{item?.title}</div>
                          <div className='detail'>{item?.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='text-center mt-4'>
                    <button className='planBtn' onClick={() => {
                      checkout({
                        lineItems: [
                          {
                            price: "price_1P1dFeRpSBYSRDXF2IV1eOrD",
                            quantity: 1,
                          },
                        ],
                      });
                    }}>$400 monthly </button>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='planCardMain'>
                <div className='planCard'>
                  <div className='head'>Plan 2 (3 months )</div>
                  <div className='cardMain'>
                    {case1.plan2.description.map((item, key) => (
                      <div
                        key={key}
                        className={item?.title ? "poinM" : "poinM jc-center"}
                      >
                        <div className='check'>
                          <Image src={checkIco} alt='' />
                        </div>
                        <div>
                          <div className='title'>{item?.title}</div>
                          <div className='detail'>{item?.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='text-center mt-4'>
                    <button className='planBtn' onClick={() => {
                      checkout({
                        mode: "subscription",
                        lineItems: [
                          {
                            price: "price_1P1dG2RpSBYSRDXF5WiQMvli",
                            quantity: 1,
                          },
                        ],
                      });
                    }}>$220 monthly </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaturalizationPayment;
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
        title: "File the case",
      },
      {
        title: "Answer your Question Regarding the Interview",
      },
      {
        title: "Strategic Guidance in your case.",
      },
      {
        title: "Responding to RFEs",
      },
      {
        title: "Proactive Legal Protection",
      },
    ],
  },
};
