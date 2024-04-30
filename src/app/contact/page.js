"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaInstagram,FaWhatsapp, FaTelegram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    character: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastname, character } = formData;

    if (name.trim() === "" || email.trim() === "") {
      // Show an alert if either of the fields is empty
      alert("Please fill in all required fields.");
    } else {
      // Perform your form submission logic here
      console.log("Form submitted");
      alert("Form submitted");
    }
  };
  return (
    <div className='homePage planPage'>
      <div className='banner2'>
        <div className='container'>
          <h1>Contact Us</h1>
        </div>
      </div>
      <section className='quickConSec'>
        <div className='contactUsForm'>
          <div className=''>
            <h2>Contact Us</h2>
            <p>Our mailing address is:</p>
            <p>152A Charlotte Street,</p>
            <p>Peterborough ON</p>
            <p>Phone: +1 (541) 221-3464</p>
            <div className="socialIcons">
              <Link href='https://www.facebook.com/profile.php?id=61556623144424'>
                <FaFacebookF size={30} color="black"/>
              </Link>
              {/* <Link href='your_linkedin_link'>
                <FaLinkedin size={30} color="black"/>
              </Link> */}
              <Link href='https://www.instagram.com/myimmigrationhub/'>
                <FaInstagram  size={30} color="black"/>
              </Link>
              <Link href='https://wa.me/+15412213464'>
                <FaWhatsapp  size={30} color="black"/>
              </Link>
              <Link href='https://www.instagram.com/myimmigrationhub/'>
                <FaTelegram  size={30} color="black"/>
              </Link>
            </div>
          </div>
          <div className=''>
            <form className='inquiryForm' onSubmit={handleSubmit}>
              <div className='title'>Ask Your Question</div>
              <div className='form-group d-flex'>
                <input
                  className='form-control me-4'
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='First Name'
                />
                <input
                  className='form-control'
                  type='text'
                  name='lastname'
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  placeholder='Last Name'
                />
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='text'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='Email Address'
                />
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control'
                  type='text'
                  name='char'
                  value={formData.char}
                  onChange={handleChange}
                  required
                  id=''
                  rows='3'
                  placeholder='Ask Your Questions (500 characters)'
                  maxLength={120}
                ></textarea>
              </div>
              <button className='submitBtn' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
