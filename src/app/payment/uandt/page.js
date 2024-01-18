"use client";
import React from "react";
import checkIco from "@/assets/images/checkIco.svg";
import StripeCheckout from "react-stripe-checkout";
import Image from "next/image";

const UandTPayment = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className='paymentPage'>
      <div className='banner'>
        <div className='container'>
          <h1>U and T Visas</h1>
        </div>
      </div>
      {/* case 1 */}
      <div className='planMain'>
        <div className='container'>
          <div className='mb-4'>
            <div className='mHeading'>U Visas and T Visas</div>
          </div>
          <div className='description'>
            <h5>No Filing Fee</h5>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='planCardMain'>
                <div className='planCard'>
                  <div className='head'>Plan 1 ( 3 months )</div>
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
                  <StripeCheckout
                    name='Lexim Law'
                    token={onToken}
                    stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                    amount={266 * 100}
                    currency='USD'
                  >
                    <button className='planBtn'>
                      $500 monthly <br /> total $1500{" "}
                    </button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='planCardMain'>
                <div className='planCard'>
                  <div className='head'>Plan 2 ( 6 months )</div>
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
                  <StripeCheckout
                    name='Lexim Law'
                    token={onToken}
                    stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                    amount={266 * 100}
                    currency='USD'
                  >
                    <button className='planBtn'>
                      $500 monthly <br /> total $3000{" "}
                    </button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
          </div>
          <h4 className='discount'>
            Expedited Process All Upfront for 10% discount.
          </h4>

          <div className='btns-after-family2'>
            <div className='dist-btn1'>
              <button className='planBtn'>$1350 (After Discount)</button>
            </div>
            <div className='dist-btn2'>
              <button className='planBtn'>$2700 (After Discount)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UandTPayment;

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
        title: "Obtain a Certification from a Law Enforcement.",
      },
      {
        title: "File the Case",
      },
      {
        title: "Respond to RFEs",
      },
      {
        title: "Strategic Guidance in Your Case.",
      },
      {
        title: "Proactive Legal Protection",
      },
    ],
  },
};
