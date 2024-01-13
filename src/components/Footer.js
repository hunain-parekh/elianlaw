// components/Footer.js
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.mainFooter}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-12'>
              <Link href='/' className={styles.logo}>
                LEXOMLAW
              </Link>
            </div>
            <div className='col-lg-3 col-md-4 col-12'>
              <ul style={{ textAlign: "left" }}>
                <li>
                  <Link href='/'> Home</Link>
                </li>
                <li>
                  <Link href='/about'> About</Link>
                </li>
                <li>
                  <Link href='/contact'> Contact</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-4 col-12'>
              <ul style={{ textAlign: "left" }}>
                <li>
                  <Link href='/plan/business'> Business</Link>
                </li>
                <li>
                  <Link href='/plan/immigration'> Immigration</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-4 col-12'>
              <ul style={{ textAlign: "left" }}>
                <li>
                  <a href='/'> Facebook</a>
                </li>
                <li>
                  <a href='/'> Instagram</a>
                </li>
                <li>
                  <a href='/'> LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.miniFooter}>Copyright - 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
