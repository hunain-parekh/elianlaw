'use client'
import React, { useState } from "react";
import { FaChevronDown } from 'react-icons/fa';
const InquiryForm = () => {
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
    <section className='quickConSec'>
      <div className='container'>
        <div className='row ai-center'>
          <div className='col-md-7'>
            <h1>INQUIRY FORM</h1>
          </div>
          <div className='col-md-5'>
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
              <div className='form-group gap'>
                <select className='form-control' placeholder='Reason' required>
                  <option value='' selected='selected' disabled>
                    Reason{" "}
                  </option>
                  <option value=''>Business Law</option>
                  <optgroup label='Immigration Law'>
                    <option value='oranges1'>Family Based Residency</option>
                    <option value='oranges2'>Marriage Based Residency</option>
                    <option value='oranges3'>Investment Visas</option>
                    <option value='oranges3'>Work Visas</option>
                    <option value='oranges3'>Victims Of Crime</option>
                    <option value='oranges3'>Asylum & Refugee</option>
                    <option value='oranges3'>Citizenship</option>
                    <option value='oranges3'>Other</option>
                  </optgroup>
                </select>
                <FaChevronDown id='drop_down' />
              </div>

              <input
                className='form-control'
                type='file'
                name='file'
                value={formData.file}
                onChange={handleChange}
                accept='.pdf, .doc, .docx' // Specify accepted file types if needed
              />

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
      </div>
    </section>
  );
};

export default InquiryForm;
