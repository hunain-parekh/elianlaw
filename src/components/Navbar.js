"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo2.0.png";

const Navbar = () => {
  const [checkCount, setCheckCount] = useState(0);

  const googleTranslateElementInit = () => {
    try {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        let checkAlreadyAdded =
          document.getElementsByClassName("goog-te-combo");
        console.log(checkAlreadyAdded[0]);
        if (checkAlreadyAdded[0]) {
          console.log("Translator already added");
        } else {
          setCheckCount(checkCount + 1);
          var addScript = document.createElement("script");
          if (checkCount == 0) {
            addScript.setAttribute(
              "src",
              "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            );
            document.body.appendChild(addScript);
            window.googleTranslateElementInit = googleTranslateElementInit;
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  }, []);
  console.log(checkCount);

  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        <Link className='navbar-brand' href='/'>
          <Image src={Logo} height={100} width={100} alt='logo' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' href='/'>
                Home
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                href='/'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Plans
              </Link>
              <ul className='dropdown-menu'>
                <li>
                  <Link className='dropdown-item' href='/plan/business'>
                    Business Law
                  </Link>
                </li>
                <li className='dropright sub-menu'>
                  <Link className='dropdown-item' href='/plan/immigration'>
                    Immigration
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/about'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/privacy'>
                Privacy
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/contact'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <div id='google_translate_element'></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
