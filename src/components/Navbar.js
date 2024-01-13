"use client";
import React, {useState, useEffect} from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
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
    <nav className={`${styles.navbar} navbar-expand-lg `}>
      <div className='container'>
        <Link className={styles.navbarBrand} href='/'>
          <Image src={Logo} height={80} width={150} alt='logo' />
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
        <div className={`collapse ${styles.navbarCollapse}`} id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className={styles.navLink} aria-current='page' href='/'>
                Home
              </Link>
            </li>
            <li className={`nav-item dropdown`}>
              <a
                className={`${styles.navLink} ${styles.dropdown_toggle}`}
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Plans
              </a>
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link className='dropdown-item' href='/plan/business'>
                    Business Law
                  </Link>
                </li>
                <li className={`dropright ${styles.sub_menu}`}>
                  <Link className='dropdown-item ' href='/plan/immigration'>
                    Immigration
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className={styles.navLink} href='/about'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={styles.navLink} href='/privacy'>
                Privacy
              </Link>
            </li>
            <li className='nav-item'>
              <a className={styles.navLink} href='/contact'>
                Contact
              </a>
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
