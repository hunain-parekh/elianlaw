/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";
import { DatePickerSection } from "@/components/datePickerSection";
import { IoChevronForwardSharp } from 'react-icons/io5';
import { FaGlobeAmericas,FaBusinessTime } from 'react-icons/fa';

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
    <div className={`${style.homePage} ${style.planPage}`}>
      <div className={style.banner}>
        <div className='container'>
          <h1>
            Unlock Unlimited Legal Support and Protection with Our Exclusive
            Subscription Service
          </h1>
        </div>
      </div>
      <section className={style.aboutUsSec}>
        <div className='container'>
          <h1 className={style.sHeading}>Introducing Lexom Law</h1>
          <p style={{ textAlign: "justify" }}>
            Where age-old tradition meets modern ambition, Lexom Law stands at
            the crossroads of dreams and reality. Our name, a blend of the Latin
            "Lex" for "law" and the essence of "Omnia" meaning "all", symbolizes
            our commitment to serve everyone, especially those with a vision.
            <br />
            <br />
            For the budding entrepreneur, the passionate small business, or the
            hopeful individual seeking a brighter future on American shores, we
            are your bridge. In the intricate realms of business and immigration
            law, Lexom is not just a law firm—it's a partner in your journey.
            <br />
            <br />
            We understand the dreams that drive you, and with our transparent
            subscription and flat fee models, we make sure that achieving them
            doesn’t come with unforeseen legal costs. At Lexom, we don’t just
            provide legal services; we champion aspirations. Welcome to Lexom
            Law – Where Dreams Meet Determined Advocacy.
          </p>
        </div>
      </section>
      <section className={style.serviceSec}>
        <div className='container'>
          <h1 className={style.sHeading}>Services</h1>
          <div className='row'>
            <div className='col-md-6'>
              <div className={`${style.card__bx} ${style.card__1}`}>
                <div className={style.card__data}>
                  <div className={style.card__icon}>
                    <div className={style.card__icon_bx}>
                    <FaBusinessTime />
                    </div>
                  </div>
                  <div className={style.card__content}>
                    <h3>Business Law</h3>
                    <Link href='/plan/business'>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className={`${style.card__bx} ${style.card__1}`}>
                <div className={style.card__data}>
                  <div className={style.card__icon}>
                    <div className={style.card__icon_bx}>
                    <FaGlobeAmericas />
                    </div>
                  </div>
                  <div className={style.card__content}>
                    <h3>Immigration</h3>
                    <Link href='/plan/immigration'>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.practiceAreaSec}>
        <div className='container'>
          <h1 className={style.sHeading}>OUR PRACTICE AREAS</h1>
          <div className='row'>
            {areas?.map((item, key) => (
              <div className='col-lg-3 col-md-6 mb-3' key={key}>
                <Link href={item?.path} className={style.area_box}>
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
        <div className={style.heading}>Questions about legal problem?</div>
        {/* <DatePickerSection /> */}
      </div>
    </div>
  );
};

export default Home;
