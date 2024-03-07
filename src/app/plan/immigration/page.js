'use client'
import React from "react";
import immigrationData from "@/components/immigrationPlanData";
import ImmigrationPlan from "@/components/immigrationPlan";
import businessImg1 from "@/assets/images/businessImg1.png";
import Link from "next/link";
import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";

const Immigration = () => {
  return (
    <div className='planPage immigration'>
      <div className='banner'>
        <div className='container'>
          <h1>IMMIGRATION</h1>
        </div>
      </div>
      <div className='container'>
        <section className='sec1'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='content'>
                <p>
                  With specialized expertise in immigration law, as well as
                  strong foundation in corporate law, commercial law, employment
                  law, intellectual property, and regulatory compliance, My Immigration Hub
                  provides a comprehensive range of services dedicated to
                  protecting your interests and ensuring compliance with
                  immigration regulations.
                </p>
                <p>
                  At My Immigration Hub, our client-centric approach lies at the core of
                  our immigration law practice. We understand that each
                  immigration case is unique, and we take the time to grasp your
                  specific needs and goals, delivering practical and effective
                  legal solutions tailored to your immigration journey. Count on
                  our proactive guidance, unwavering commitment to excellence,
                  and our steadfast dedication to building long-lasting
                  relationships that truly set us apart.{" "}
                </p>
                <p>
                  Take the first step towards achieving your immigration goals.
                  Contact My Immigration Hub today to schedule a consultation with us.
                  Discover how our trusted legal counsel can help navigate the
                  complexity of immigration law.{" "}
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='imgDiv'>
                <Image className='img-fluid' src={businessImg1} alt='' />
              </div>
            </div>
          </div>
        </section>
        <ImmigrationPlan item={immigrationData} />
        <InquiryForm />
      </div>
    </div>
  );
};

export default Immigration;
