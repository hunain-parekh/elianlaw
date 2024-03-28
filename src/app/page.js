/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";
import { DatePickerSection } from "@/components/datePickerSection";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaGlobeAmericas, FaBusinessTime } from "react-icons/fa";

const Home = () => {
  const areas = [
    {
      name: "Business Law",
      path: "/plan/business",
    },
    {
      name: "Immigration",
      path: "/plan/immigration",
    },
    {
      name: "Family Visas",
      path: "/plan/immigration/family",
    },
    {
      name: "Work Visas",
      path: "/plan/immigration/workvisas",
    },
    {
      name: "Student Visa",
      path: "/plan/immigration/studentvisa",
    },
    {
      name: "Investment Visas",
      path: "/plan/immigration/investmentvisas",
    },
    {
      name: "Assylum Visas",
      path: "/plan/immigration/assylumvisas",
    },
    {
      name: "U And T Visas",
      path: "/plan/immigration/uandtvisas",
    },
    {
      name: "Citizenship",
      path: "/plan/immigration/citizenship",
    },
    {
      name: "VAWA",
      path: "/plan/immigration/vawa",
    },
    {
      name: "DACA",
      path: "/plan/immigration/daca",
    },
    {
      name: "Others",
      path: "/plan/immigration/other",
    },
  ];

  return (
    <div className='homePage planPage'>
      <div className='banner'>
        <div className='container'>
          <h1>
            Unlock Unlimited Legal Support and Protection with Our Exclusive
            Subscription Service
          </h1>
        </div>
      </div>
      <section className='aboutUsSec'>
        <div className='container'>
          <h1 className='sHeading'>Introducing My Immigration Hub</h1>
          <p style={{ textAlign: "justify" }}>
            For any immigration matter you may be experiencing, our team of
            experienced professionals is here to provide personalized assistance
            tailored to your needs. With a commitment to affordability, we
            strive to ensure that navigating the complexities of immigration
            processes is both accessible and stress-free for you. Call us today
            to ask your questions and take the first step towards achieving your
            immigration goals with confidence.
            <br />
            <br />
            For the budding entrepreneur, the passionate small business, or the
            hopeful individual seeking a brighter future on American shores, we
            are your bridge. In the intricate realms of business and immigration
            law, My Immigration Hub is not just a law firm—it's a partner in your journey.
            <br />
            <br />
            We understand the dreams that drive you, and with our transparent
            subscription and flat fee models, we make sure that achieving them
            doesn’t come with unforeseen legal costs. At My Immigration Hub, we don’t just
            provide legal services; we champion aspirations. Welcome to My Immigration Hub – Where Dreams Meet Determined Advocacy.
          </p>
        </div>
      </section>
      <section className='serviceSec'>
        <div className='container'>
          <h1 className='sHeading'>Services</h1>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card__bx card__1'>
                <div className='card__data'>
                  <div className='card__icon'>
                    <div className='card__icon-bx'>
                      <FaBusinessTime />
                    </div>
                  </div>
                  <div className='card__content'>
                    <h3>Business Law</h3>
                    <Link href='/plan/business'>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card__bx card__1'>
                <div className='card__data'>
                  <div className='card__icon'>
                    <div className='card__icon-bx'>
                      <FaGlobeAmericas />
                    </div>
                  </div>
                  <div className='card__content'>
                    <h3>Immigration</h3>
                    <Link href='/plan/immigration'>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='practiceAreaSec'>
        <div className='container'>
          <h1 className='sHeading'>OUR PRACTICE AREAS</h1>
          <div className='row'>
            {areas?.map((item, key) => (
              <div className='col-lg-3 col-md-6 mb-3' key={key}>
                <Link href={item?.path} className='area_box'>
                  <p className='mb-0'>{item?.name}</p>
                  <IoChevronForwardSharp />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <InquiryForm />
      <div className='container'>
        <div className='heading'>Questions about legal problem?</div>
        <DatePickerSection />
      </div>
    </div>
  );
};

export default Home;
