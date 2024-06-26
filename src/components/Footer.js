// components/Footer.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="mainFooter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <Link href="/" className="logo">
                MY IMMIGRATION HUB
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <ul style={{ textAlign: "left" }}>
                <li>
                  <Link href="/"> Home</Link>
                </li>
                <li>
                  <Link href="/about"> About</Link>
                </li>
                <li>
                  <Link href="/contact"> Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <ul style={{ textAlign: "left" }}>
                <li>
                  <Link href="/plan/business"> Business</Link>
                </li>
                <li>
                  <Link href="/plan/immigration"> Immigration</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <ul style={{ textAlign: "left" }}>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61556623144424"> Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/myimmigrationhub/"> Instagram</a>
                </li>
                <li>
                  <a href="https://wa.me/+15412213464"> Whatsapp</a>
                </li>
                {/* <li>
                  <a href="/"> LinkedIn</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="miniFooter">&#169; Copyright - 2024</div>
    </footer>
  );
};

export default Footer;
