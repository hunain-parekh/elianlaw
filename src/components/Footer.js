// components/Footer.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="mainFooter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12">
              <Link href="/" className="logo">
                LEXOMLAW
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
                  <a href="/"> Facebook</a>
                </li>
                <li>
                  <a href="/"> Instagram</a>
                </li>
                <li>
                  <a href="/"> LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="miniFooter">Copyright - 2023</div>
    </footer>
  );
};

export default Footer;
