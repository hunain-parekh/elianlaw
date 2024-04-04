"use client";
import React from "react";
import checkIco from "@/assets/images/checkIco.svg";
import StripeCheckout from "react-stripe-checkout";
import Image from "next/image";
const FamilyPayment = () => {
  const onToken = (token) => {
    console.log(token);
  };
  const case1 = {
    plan1: {
      description: [
        {
          title: "Unlimited Legal Advice",
        },
        {
          title: "Basic Document Review",
        },
        {
          title: "Final Application Review",
        },
      ],
    },
    plan2: {
      description: [
        {
          title: "Unlimited Legal Advice",
        },
        {
          title: "Basic Document Review",
        },
        {
          title: "File the case",
        },
        {
          title: "Inquiry form the USCIS",
        },
        {
          title: "Respond to RFES",
        },
        {
          title: "Strategic Guidance in your case",
        },
      ],
    },
  };
  const case2 = {
    plan1: {
      description: [
        {
          title: "Unlimited Legal Advice",
        },
        {
          title: "Unlimited Document Review",
        },
        {
          title: "Final Application Review",
        },
      ],
    },
    plan2: {
      description: [
        {
          title: "Unlimited Legal Advice",
        },
        {
          title: "Unlimited Document Review",
        },
        {
          title: "Filing The Case",
        },
        {
          title: "Inquiring from the USCIS",
        },
        {
          title: "Strategic Guidance throughout Your Case",
        },
      ],
    },
    plan3: {
      description: [
        {
          title: "Unlimited Legal Advice",
        },
        {
          title: "Unlimited Document Review",
        },
        {
          title: "Filing The Case",
        },
        {
          title: "Inquiring from the USCIS",
        },
        {
          title: "Strategic Guidance throughout Your Case",
        },
        {
          title: "Responding To RFE",
        },
        {
          title: "Appeal The Case",
        },
        {
          title: "Proactive Legal Protection",
        },
      ],
    },
  };
  const case3 = {
    plan1: {
      description: [
        {
          title: "Unlimited Legal Advice",
        },
        {
          title: "Unlimited Document Review",
        },
        {
          title: "Final Application Review",
        },
      ],
    },
    plan2: {
      description: [
        {
          title: "Unlimited Legal Advice",
        },
        {
          title: "Unlimited Document Review",
        },
        {
          title: "Filing Tour Consulor Processing",
        },
        {
          title: "Inquiring form NVC",
        },
        {
          title: "Responding to RFEs",
        },
        {
          title: "Strategic Guidance throughout Your Case",
        },
        {
          title: "Proactive Legal Protection",
        },
      ],
    },
  };
  const case4 = {
    plan1: {
      description: [
        {
          title: "Unlimited Legal Advice",
        },
        {
          title: "Unlimited Document Review",
        },
        {
          title: "Final Application Review",
        },
      ],
    },
    plan2: {
      description: [
        {
          title: "Unlimited Legal Advice",
        },
        {
          title: "Unlimited Document Review",
        },
        {
          title: "Filing The Case",
        },
        {
          title: "Inquiring from the USCIS",
        },
        {
          title: "Strategic Guidance throughout Your Case",
        },
      ],
    },
    plan3: {
      description: [
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "Responding To RFE",
        },
        {
          title: "Appeal The Case",
        },
        {
          title: "Proactive Legal Protection",
        },
      ],
    },
  };
  return (
    <div className='paymentPage'>
      <div className='banner'>
        <div className='container'>
          <h1>Family Visas</h1>
        </div>
      </div>
      <div className='accordion' id='myAccordion'>
        <div className='accordion-item'>
          {/* case 1 */}
          <div className='planMain'>
            <div className='container'>
              <div
                className='mb-4 accordion-button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
              >
                <div className='w-100'>
                  <div className='mHeading'>
                    Petition to Reunite with Immediate Family
                  </div>
                  <div className='mHeading'>OR</div>
                  <div className='mHeading'>Family Preference Category</div>
                </div>
              </div>

              <div
                id='collapseOne'
                className='accordion-collapse collapse show'
                data-bs-parent='#myAccordion'
              >
                <div className='description'>
                  <ul>
                    <h5>This Category includes:</h5>

                    <li>Spouse of the US citizen or Green Card holder</li>
                    <li>
                      Unmarried child undder 21 yrs old of a US citizen or
                      permenent resident.
                    </li>
                    <li>
                      Unmarried child older than 21 of the US citizen or
                      permenent resident
                    </li>
                    <li>Married child of a US Citizen</li>
                    <li>Parent of a US Citizen</li>
                    <li>Siblings of a US Citizen</li>
                  </ul>
                  <h5>The USCIS filing fee for I-130: $535</h5>
                </div>
                <div className='row'>
                  <div className='col-md-6 mb-4'>
                    <div className='planCardMain'>
                      <div className='planCard'>
                        <div className='head'>Plan 1 ( 1 month )</div>
                        <div className='cardMain'>
                          {case1.plan1.description.map((item, key) => (
                            <div
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
                              key={key}
                            >
                              <div className='check'>
                                <Image src={checkIco} alt='' />
                              </div>
                              <div>
                                <div className='title'>{item?.title}</div>
                                <div className='detail'>{item?.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='text-center mt-4'>
                        <StripeCheckout
                          name='My Immigration Hub'
                          token={onToken}
                          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                          amount={249 * 100}
                          currency='USD'
                        >
                          <button className='planBtn'>$249 monthly</button>
                        </StripeCheckout>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 mb-4'>
                    <div className='planCardMain'>
                      <div className='planCard'>
                        <div className='head'>Plan 2 ( 3 month )</div>
                        <div className='cardMain'>
                          {case1.plan2.description.map((item, key) => (
                            <div
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
                              key={key}
                            >
                              <div className='check'>
                                <Image src={checkIco} alt='' />
                              </div>
                              <div>
                                <div className='title'>{item?.title}</div>
                                <div className='detail'>{item?.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='text-center mt-4'>
                        <StripeCheckout
                          name='My Immigration Hub'
                          token={onToken}
                          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                          amount={166 * 100}
                          currency='USD'
                        >
                          <button className='planBtn'>$166 monthly</button>
                        </StripeCheckout>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className='discount'>
                  Expedited Process All Upfront for $449 (10% discount)
                </h4>

                <div>
                  <button className='planBtn'>$449 (After Discount)</button>
                </div>
              </div>
            </div>
          </div>

          {/* case 2 */}
          <div className='planMain'>
            <div className='container'>
              <div
                className='mb-4 accordion-button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
              >
                <div className='w-100'>
                  <div className='mHeading'>Immediate Family</div>
                  <div className='mHeading'>Green Card Application</div>
                </div>
              </div>
              <div
                id='collapseTwo'
                className='accordion-collapse collapse '
                data-bs-parent='#myAccordion'
              >
                <div className='description'>
                  {/* <ul>
                                    <li>I-30, I-485, I-131, I-765</li>
                                </ul> */}
                  <h5>I-30, I-485, I-131, I-765</h5>
                  <h5>$1760 Filing Fee for those inside the US</h5>
                  <h5>$535 Filing Fee for those outside the US</h5>
                </div>

                <div className='row'>
                  <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='planCardMain'>
                      <div className='planCard'>
                        <div className='head'>Plan 1 ( 3 month )</div>
                        <div className='cardMain'>
                          {case2.plan1.description.map((item, key) => (
                            <div
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
                              key={key}
                            >
                              <div className='check'>
                                <Image src={checkIco} alt='' />
                              </div>
                              <div>
                                <div className='title'>{item?.title}</div>
                                <div className='detail'>{item?.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='text-center mt-4'>
                        <StripeCheckout
                          name='My Immigration Hub'
                          token={onToken}
                          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                          amount={499 * 100}
                          currency='USD'
                        >
                          <button className='planBtn'>$499</button>
                        </StripeCheckout>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='planCardMain'>
                      <div className='planCard'>
                        <div className='head'>Plan 2 ( 3 month )</div>
                        <div className='cardMain'>
                          {case2.plan2.description.map((item, key) => (
                            <div
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
                              key={key}
                            >
                              <div className='check'>
                                <Image src={checkIco} alt='' />
                              </div>
                              <div>
                                <div className='title'>{item?.title}</div>
                                <div className='detail'>{item?.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='text-center mt-4'>
                        <StripeCheckout
                          name='My Immigration Hub'
                          token={onToken}
                          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                          amount={599 * 100}
                          currency='USD'
                        >
                          <button className='planBtn'>$599</button>
                        </StripeCheckout>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='planCardMain'>
                      <div className='planCard'>
                        <div className='head'>Plan 3 ( 6 month )</div>
                        <div className='cardMain'>
                          {case2.plan3.description.map((item, key) => (
                            <div
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
                              key={key}
                            >
                              <div className='check'>
                                <Image src={checkIco} alt='' />
                              </div>
                              <div>
                                <div className='title'>{item?.title}</div>
                                <div className='detail'>{item?.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='text-center mt-4'>
                        <StripeCheckout
                          name='My Immigration Hub'
                          token={onToken}
                          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                          amount={333 * 100}
                          currency='USD'
                        >
                          <button className='planBtn'>$333</button>
                        </StripeCheckout>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className='discount'>
                  Expedited Process All Upfront for $1799 (10% discount)
                </h4>

                <div className='btns-after'>
                  <div className='dist-btn1'>
                    <button className='planBtn'>$1331 (After Discount)</button>
                  </div>
                  <div className='dist-btn2'>
                    <button className='planBtn'>$1617 (After Discount)</button>
                  </div>
                  <div className='dist-btn3'>
                    <button className='planBtn'>$1798 (After Discount)</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* case 3 */}
          <div className='planMain'>
            <div className='container'>
              <div
                className='mb-4 accordion-button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
              >
                <div className='w-100'>
                  <div className='mHeading'>
                    Consular Processing after I-130 approved
                  </div>
                </div>
              </div>
              <div
                id='collapseThree'
                class='accordion-collapse collapse '
                data-bs-parent='#myAccordion'
              >
                <div className='description'>
                  <h5>The USCIS filing fee: $545 ($325+$120) </h5>
                </div>
                <div className='row'>
                  <div className='col-md-6 mb-4'>
                    <div className='planCardMain'>
                      <div className='planCard'>
                        <div className='head'>Plan 1 ( 3 month )</div>
                        <div className='cardMain'>
                          {case3.plan1.description.map((item, key) => (
                            <div
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
                              key={key}
                            >
                              <div className='check'>
                                <Image src={checkIco} alt='' />
                              </div>
                              <div>
                                <div className='title'>{item?.title}</div>
                                <div className='detail'>{item?.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='text-center mt-4'>
                        <StripeCheckout
                          name='My Immigration Hub'
                          token={onToken}
                          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                          amount={333 * 100}
                          currency='USD'
                        >
                          <button className='planBtn'>$333</button>
                        </StripeCheckout>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 mb-4'>
                    <div className='planCardMain'>
                      <div className='planCard'>
                        <div className='head'>Plan 2 ( 3 month )</div>
                        <div className='cardMain'>
                          {case3.plan2.description.map((item, key) => (
                            <div
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
                              key={key}
                            >
                              <div className='check'>
                                <Image src={checkIco} alt='' />
                              </div>
                              <div>
                                <div className='title'>{item?.title}</div>
                                <div className='detail'>{item?.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='text-center mt-4'>
                        <StripeCheckout
                          name='My Immigration Hub'
                          token={onToken}
                          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                          amount={499 * 100}
                          currency='USD'
                        >
                          <button className='planBtn'>$499</button>
                        </StripeCheckout>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className='discount'>
                  Expedited Process All Upfront for $1350 (10% discount)
                </h4>

                <div className='btns-after-family2'>
                  <div className='dist-btn1'>
                    <button className='planBtn'>$899 (After Discount)</button>
                  </div>
                  <div className='dist-btn2'>
                    <button className='planBtn'>$1347 (After Discount)</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* case 4 */}
          <div className='planMain'>
            <div className='container'>
              <div
                className='mb-4 accordion-button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
              >
                <div className='w-100'>
                  <div className='mHeading'>Fiancé Visa for US Citizen</div>
                  <div className='mHeading'>Spouse Visa</div>
                </div>
              </div>
              <div
                id='collapseFour'
                class='accordion-collapse collapse '
                data-bs-parent='#myAccordion'
              >
                <ul>
                  <li>K visa</li>
                  <li>
                    V visa for spouse and minor child of Green Card holder
                  </li>
                </ul>
                <div className='description'>
                  <h5>Consular Processing Filing Fee $445 </h5>
                </div>
                <div className='row'>
                  <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='planCardMain'>
                      <div className='planCard'>
                        <div className='head'>Plan 1 ( 3 month )</div>
                        <div className='cardMain'>
                          {case4.plan1.description.map((item, key) => (
                            <div
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
                              key={key}
                            >
                              <div className='check'>
                                <Image src={checkIco} alt='' />
                              </div>
                              <div>
                                <div className='title'>{item?.title}</div>
                                <div className='detail'>{item?.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='text-center mt-4'>
                        <StripeCheckout
                          name='My Immigration Hub'
                          token={onToken}
                          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                          amount={1100 * 100}
                          currency='USD'
                        >
                          <button className='planBtn'>
                            $366 monthly <br /> total $1100
                          </button>
                        </StripeCheckout>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='planCardMain'>
                      <div className='planCard'>
                        <div className='head'>Plan 2 ( 6 month )</div>
                        <div className='cardMain'>
                          {case3.plan2.description.map((item, key) => (
                            <div
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
                              key={key}
                            >
                              <div className='check'>
                                <Image src={checkIco} alt='' />
                              </div>
                              <div>
                                <div className='title'>{item?.title}</div>
                                <div className='detail'>{item?.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='text-center mt-4'>
                        <StripeCheckout
                          name='My Immigration Hub'
                          token={onToken}
                          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                          amount={1300 * 100}
                          currency='USD'
                        >
                          <button className='planBtn'>
                            $216 monthly <br /> total $1300
                          </button>
                        </StripeCheckout>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 mb-4'>
                    <div className='planCardMain'>
                      <div className='planCard'>
                        <div className='head'>Plan 3 ( 6 month )</div>
                        <div className='cardMain'>
                          {case4.plan2.description.map((item, key) => (
                            <div
                              className={
                                item?.title ? "poinM" : "poinM jc-center"
                              }
                              key={key}
                            >
                              <div className='check'>
                                <Image src={checkIco} alt='' />
                              </div>
                              <div>
                                <div className='title'>{item?.title}</div>
                                <div className='detail'>{item?.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='text-center mt-4'>
                        <StripeCheckout
                          name='My Immigration Hub'
                          token={onToken}
                          stripeKey={process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY}
                          amount={1500 * 100}
                          currency='USD'
                        >
                          <button className='planBtn'>
                            $125 monthly <br /> total $750
                          </button>
                        </StripeCheckout>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className='discount'>
                  Expedited Process All Upfront for $1350 (10% discount)
                </h4>

                <div className='btns-after'>
                  <div className='dist-btn1'>
                    <button className='planBtn'>$988 (After Discount)</button>
                  </div>
                  <div className='dist-btn2'>
                    <button className='planBtn'>$1166 (After Discount)</button>
                  </div>
                  <div className='dist-btn3'>
                    <button className='planBtn'>$675 (After Discount)</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyPayment;
