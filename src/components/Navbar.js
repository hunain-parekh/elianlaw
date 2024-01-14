"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
const Navbar = () => {
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg `}>
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src={Logo} height={80} width={150} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item dropdown`}>
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Plans
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/plan/business">
                      Business Law
                    </Link>
                  </li>
                  <li className={`dropright sub-menu`}>
                    <Link className="dropdown-item " href="/plan/immigration">
                      Immigration
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/privacy">
                  Privacy
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <div id="google_translate_element"></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
