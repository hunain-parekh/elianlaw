"use client";
import React from "react";

const FamilyVisas = ({ setShowPayment }) => {
  return (
    <div className='planPage immigration'>
      <div className='banner'>
        <div className='container'>
          <h1>Family Visas</h1>
        </div>
      </div>
      <div className='container'>
        <section className='sec1'>
          <div className='row'>
            <div className='col-12'>
              <div className='content'>
                <p>
                  Reuniting families is not just our expertise - it’s our
                  passion. At Lexom Law, we understand the deep importance of
                  family and the desire to be together. That’s why we’ve made
                  family-based immigration our specialty, dedicated to helping
                  individuals navigate the process of bringing their loved ones
                  to the United States.
                </p>
                <p>
                  With our firm, you can trust that you’re in capable hands. Our
                  team stays up to date with the latest regulations and
                  requirement surrounding family-based visas, ensuring that we
                  provide comprehensive assistance tailored to your unique
                  circumstances.
                </p>
                <p>
                  Immediate relative immigrant visas are our area of expertise
                  when it comes to the immediate reunification of families.
                  Spouses, unmarried children under 21 years old, and parents of
                  the US citizens, who are 21 years old or older can rely on our
                  guidance to obtain these visas swiftly.
                </p>
                <p>
                  If you are a relative of a US citizen or lawful permanent
                  resident who does not qualify for immediate relative visas, we
                  are here to help with family preference immigrant visas.
                  Whether it’s visas for unmarried sons or daughters older than
                  21 years old, married sons and daughters, or siblings of US
                  citizens, we’ll navigate the complexities and maximize your
                  chances of success.{" "}
                </p>
                <p>
                  Love knows no borders, which is why we also offer support for
                  fiance(e) visas (K-1) and spouse visas (K-3). if you are
                  engaged or married to a foreign national, we will guide you
                  through the process of bringing your partner to the United
                  States, ensuring a seamless transition and a pathway to
                  permanent residency.
                </p>
                <p>
                  Additionally, we provide assistance with V visas, a valuable
                  option for the spouses and minor children of lawful permanent
                  residents. These visas allow them to join their loved ones in
                  the United States while awaiting on immigrant visas.
                </p>
                <p>
                  Your family’s well-being is our priority. We’ll work closely
                  with you to understand your unique family situation and
                  develop a personalized strategy that maximizes your chances of
                  success. From handling complex paperwork to navigating legal
                  requirements, we’ll be your unwavering advocate every step of
                  the way.{" "}
                </p>
                <p>
                  If you’re seeking to reunite with your family members in the
                  United States, don’t wait another moment. Contact our firm
                  today tto schedule a consultation. We are here to provide
                  compassionate guidance, expertise, and unwavering support
                  throughout your family-based visa journey. Together, let’s
                  bring your family closer than ever before.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className='chooseBtn' onClick={() => setShowPayment(true)}>
          Choose a Plan for Family Visas
        </div>

        {/* <section className="sec2 pt-0">
                <div className="heading">Questions about legal problem?</div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="offMain">
                            <div className="text">10% off on your first month subscription.</div>
                            <div className="imgDiv">
                                <img src={offImg} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="formMain">
                            <div className="col1">
                                <div className="title">Sign up for legal plan</div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Name' />
                                </div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Email' />
                                </div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Phone' />
                                </div>
                                <button className="submitBtn">Book Now ($150)</button>
                            </div>
                            <div className="col1">
                                <div className="title">Inquire Quick Consultation</div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Name' />
                                </div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Email' />
                                </div>
                                <div className="form-group">
                                    <input className='form-control' type="text" placeholder='Phone' />
                                </div>
                                <button className="submitBtn">Inquire</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DatePickerSection paymentPagePath={"/payment/family"} /> */}
      </div>
    </div>
  );
};

export default FamilyVisas;
