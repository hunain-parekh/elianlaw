"use client";
import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import checkIco from "@/assets/images/checkIco.svg";
import Image from "next/image";

const CorporationPlan = () => {
  const plan1 = {
    price: "$25.00",
    time: "Per Month",
    description: [
      {
        title: "Unlimited Legal Advice",
        desc: "Set Appointments via Portal (9AM - 5PM CST, M-F)",
      },
      {
        title: "Unlimited Legal Advice",
        desc: "Website Terms & Conditions Website Privacy Policy Non-Disclosure Agreement Independent Contractor Agreement",
      },
    ],
  };
  const plan2 = {
    price: "$79.00",
    time: "Per Month",
    description: [
      {
        title: "Unlimited Legal Advice",
        desc: "Set Appointments via Portal (9AM - 5PM CST, M-F) Business Formation Equipment Leases Real Estate Leasing Compliance Contracting Banking Setup",
      },
      {
        title: "Unlimited Document Reviews",
        desc: "Contracts Legal Complaints Government Correspondence",
      },
      {
        title: "Strategic Guidance",
        desc: "Founder Challenges Idea Validation Business Formation Insurance Funding Needs",
      },
      {
        title: "Basic Self-Serve Documents",
        desc: "Website Terms & Conditions Website Privacy Policy Non-Disclosure Agreement Independent Contractor Agreement",
      },
      {
        title: "UPFRONT, FLAT-FEE PRICING",
        desc: "Documents: Correspondence Letters Collection LettersContracts: Hiring/Firing Non-Disclosure Equipment Leases Real Estate Leasing Compliance Vendor Contracts Customer Contracts and More",
      },
    ],
  };
  const plan3 = {
    price: "$199.00",
    time: "Per Month",
    description: [
      {
        title: "Unlimited Legal Advice",
        desc: "Services in Outside Counsel tierContact Your Attorney Directly (7AM - 10PM CST, M-F) Based on Attorney Availability Employment Issues Corporate Issues Intellectual Property Foreign Qualification Banking Vendor Issues Dissolution Other Business Concerns",
      },
      {
        title: "Unlimited Document Reviews",
        desc: "Contracts Legal Complaints Government Correspondence",
      },
      {
        title: "Strategic Guidance",
        desc: "Founder Challenges Idea Validation Business Formation Insurance Funding Needs",
      },
      {
        title: "Basic Self-Serve Documents",
        desc: "Website Terms & Conditions Website Privacy Policy Non-Disclosure Agreement Independent Contractor Agreement",
      },
      {
        title: "UPFRONT, FLAT-FEE PRICING",
        desc: "Documents: Correspondence Letters Collection LettersContracts: Hiring/Firing Non-Disclosure Equipment Leases Real Estate Leasing Compliance Vendor Contracts Customer Contracts and MoreCorporate Documents Employment Agreement Employee Evaluation Employee Handbook Commission Agreement Bonus Agreement Confidentiality Corporate PoliciesAnti-harassmentArbitrationAttendanceBackground CheckConfidentialityDisability AccommodationDress CodeDrug and Alcohol TestingEqual EmploymentFMLAMaternitySick LeavePaid Time Off",
      },
    ],
  };
  const onToken = (token) => {
    console.log(token);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='paymentPage'>
      <div className='banner'>
        <div className='container'>
          <h1>Corporations Plan</h1>
        </div>
      </div>
      <div className='planMain'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 mb-4'>
              <div className='planCard'>
                <div className='head'>Plan 1</div>
                <div className='cardMain'>
                  <div className='mb-4'>
                    <div className='price'>{plan1.price}</div>
                    <div className='time'>{plan1.time}</div>
                  </div>
                  {plan1.description.map((item, key) => (
                    <div className='poinM' key={key}>
                      <div className='check'>
                        <img src={checkIco} alt='' />
                      </div>
                      <div>
                        <div className='title'>{item?.title}</div>
                        <div className='detail'>{item?.desc}</div>
                      </div>
                    </div>
                  ))}
                  <StripeCheckout
                    name='Lexim Law'
                    token={onToken}
                    stripeKey={process.env.REACT_APP_STRIPE_PRIVATE_KEY}
                    amount={25 * 100}
                    currency='USD'
                  >
                    <button className='enroll'>Enroll Now</button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-4'>
              <div className='planCard'>
                <div className='head'>Plan 2</div>
                <div className='cardMain'>
                  <div className='mb-4'>
                    <div className='price'>{plan2.price}</div>
                    <div className='time'>{plan2.time}</div>
                  </div>
                  {plan2.description.map((item, key) => (
                    <div className='poinM' key={key}>
                      <div className='check'>
                        <Image src={checkIco} alt='' />
                      </div>
                      <div>
                        <div className='title'>{item?.title}</div>
                        <div className='detail'>{item?.desc}</div>
                      </div>
                    </div>
                  ))}
                  <StripeCheckout
                    name='Lexim Law'
                    token={onToken}
                    stripeKey={process.env.REACT_APP_STRIPE_PRIVATE_KEY}
                    amount={79 * 100}
                    currency='USD'
                  >
                    <button className='enroll'>Enroll Now</button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-4'>
              <div className='planCard'>
                <div className='head'>Plan 3</div>
                <div className='cardMain'>
                  <div className='mb-4'>
                    <div className='price'>{plan3.price}</div>
                    <div className='time'>{plan3.time}</div>
                  </div>
                  {plan3.description.map((item, key) => (
                    <div className='poinM' key={key}>
                      <div className='check'>
                        <Image src={checkIco} alt='' />
                      </div>
                      <div>
                        <div className='title'>{item?.title}</div>
                        <div className='detail'>{item?.desc}</div>
                      </div>
                    </div>
                  ))}
                  <StripeCheckout
                    name='Lexim Law'
                    token={onToken}
                    stripeKey={process.env.REACT_APP_STRIPE_PRIVATE_KEY}
                    amount={199 * 100}
                    currency='USD'
                  >
                    <button className='enroll'>Enroll Now</button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporationPlan;
