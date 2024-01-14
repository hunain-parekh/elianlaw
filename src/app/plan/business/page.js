import React from "react";
import Link from "next/link";
import Image from "next/image";
import businessImg1 from "@/assets/images/businessImg1.png";
import InquiryForm from "@/components/InquiryForm";

const Business = () => {
  return (
    <div className='planPage'>
      <div className='banner'>
        <div className='container'>
          <h1>BUSINESS</h1>
        </div>
      </div>
      <div className='container'>
        <section className='sec1'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='content'>
                <p>
                  Unlock the full potential of your business with the expertise
                  of Lexom Law. Our team of seasoned attorneys specializes in
                  corporate law, commercial law, employment law, intellectual
                  property, and regulatory compliance. With a comprehensive
                  range of services, we are dedicated to safeguarding your
                  interests and ensuring steadfast compliance with the law.{" "}
                </p>
                <p>
                  At Lexom Law, our client-centric approach lies at the heart of
                  everything we do. We take the time to understand your unique
                  needs and goals, allowing us to deliver practical and
                  effective legal solutions tailored specifically to your
                  business. Count on our proactive guidance, unwavering
                  commitment to excellence, and our steadfast dedication to
                  building long-lasting relationship that truly set up apart.
                </p>
                <p>
                  Take the first step towards unleashing your business’s
                  potential. Contact Lexom Law today to schedule a consultation
                  with our experienced attorneys. Discover how our trusted legal
                  consult can help your business thrive in today’s competitive
                  environment.
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

        <Link className='chooseBtn' href={"/payment/corporation"}>
          Choose a Plan for Business
        </Link>

        <InquiryForm/>
      </div>
    </div>
  );
};

export default Business;
