'use client'
import React from "react";
import familyIco from "@/assets/images/familyIco.svg";
import citizanshipIco from "@/assets/images/citizanshipIco.svg";
import workIco from "@/assets/images/workIco.svg";
import assylumIco from "@/assets/images/assylumIco.svg";

const Citizenship = ({ setShowPayment }) => {
  const iData = [
    {
      icon: citizanshipIco,
      title: "Citizenship",
      modalHead: "Naturalization and Obtaining Citizenship",
      description: [
        "At Lexom Law, we understand the significance of obtaining U.S. citizenship and the rights and opportunities it affords individuals. Our firm specializes in the citizenship process, offering comprehensive legal services to help you navigate the path to becoming a U.S. citizen.",
        "The process of obtaining U.S. citizenship, also known as naturalization, involves meeting specific eligibility criteria and completing various requirements set by U.S. immigration laws. We have an in-depth understanding of the naturalization process and stay updated with the latest developments and requirements to provide you with expert guidance and representation.",
        "Our citizenship services include:",
        "Eligibility Assessment: We will carefully evaluate your eligibility for U.S. citizenship, considering factors such as your immigration status, length of residency, age, and language proficiency. We will provide a thorough analysis of your case, ensuring you meet the necessary requirements before proceeding with the naturalization process.",
        "Document Preparation: Our firm will assist you in gathering the required documents for your citizenship application, such as your green card, identification, tax returns, and other supporting materials. We will ensure that all forms and supporting documents are properly completed and submitted, minimizing the chances of delays or complications in your application.",
        "Application Filing: We will guide you through the naturalization application process, including the completion of the application for naturalization. Our firm will review your application to ensure accuracy and completeness before submitting it to the appropriate U.S. Citizenship and Immigration Services (USCIS) office.",
        "Interview Preparation: As part of the naturalization process, you will be required to attend an interview with a USCIS officer. Our firm will prepare you for the interview, familiarizing you with the types of questions that may be asked and providing guidance on how to best present your case. We will ensure that you are well-prepared and confident for this crucial step.",
        "Ongoing Support: Throughout the naturalization process, our team will provide you with personalized support and guidance. We will keep you informed about the progress of your case, address any concerns or questions you may have, and represent your best interests at every stage.",
        "At Lexom Law, we are committed to helping you achieve your goal of U.S. citizenship. Our experienced attorneys will provide expert advice, diligent representation, and compassionate support throughout the naturalization process. We understand the significance of this milestone and are dedicated to helping you navigate the complexities of becoming a U.S. citizen.",
        "Contact us today to schedule a consultation and let us assist you in realizing your dream of becoming a U.S. citizen and enjoying the rights and privileges that come with it.",
      ],
    },
    {
      icon: familyIco,
      title: "Family Based",
      modalHead: "Family Based",
      description: [
        "Reuniting families is at the heart of our immigration law practice. We understand the importance of family, and the desire to be together, which is why we specialize in family-based visas, helping individuals navigate the process of bringing their loved ones to the United States.",
        "Our firm is knowledgeable in the intricacies of family-based visas and stays up to date with the latest regulations and requirements. We offer comprehensive assistance with various types of family-based visas to cater to your unique circumstances.",
        "For immediate relatives of U.S. citizens, we provide guidance on obtaining immediate relative immigrant visas. These visas are available to spouses, unmarried children under 21 years old, and parents of U.S. citizens who are 21 years old or older.",
        "If you are a relative of a U.S. citizen or lawful permanent resident and do not qualify for immediate relative visas, we can assist you with family preference immigrant visas. These visas are categorized into four preference categories, including visas for unmarried sons and daughters, married sons and daughters, and siblings of U.S. citizens.",
        "We also offer support for fiancé(e) visas (K-1) and spouse visas (K-3) for U.S. citizens who are engaged or married to foreign nationals. Our team will guide you through the process of bringing your fiancé(e) or spouse to the United States, ensuring a smooth transition and a path toward permanent residency.",
        "Additionally, we provide assistance with V visas, which allow the spouses and minor children of lawful permanent residents to join their loved ones in the United States while waiting for an immigrant visa.",
        "Our firm will work closely with you to understand your unique family situation and develop a personalized strategy to maximize your chances of success. We will handle the complex paperwork, navigate the legal requirements, and advocate for your family's best interests every step of the way.",
        "If you are seeking to reunite with your family members in the United States, contact our firm today to schedule a consultation. We are here to provide compassionate guidance, expertise, and unwavering support in your family-based visa journey.",
      ],
    },
    {
      icon: workIco,
      title: "Work Visas",
      modalHead: "Work Visas",
      description: [
        "At our firm Lexom Law, we understand the importance of pursuing career opportunities and expanding your professional horizons in the United States. Our immigration law experts specialize in work visas, providing comprehensive legal services to individuals and businesses seeking to obtain employment authorization in the U.S.",
        "Navigating the complex landscape of work visas requires in-depth knowledge and a thorough understanding of immigration laws and regulations. Our experienced team of attorneys stays up to date with the latest developments and policies to offer you cutting-edge advice and guidance.",
        "We assist individuals from diverse professional backgrounds, including skilled workers, professionals, investors, and multinational executives, in obtaining the appropriate work visa for their specific needs. Some of the common work visa categories we handle include:",
        "H-1B Visa: Designed for professionals in specialty occupations, the H-1B visa allows U.S. employers to hire foreign workers in fields such as IT, engineering, medicine, and more.",
        "L-1 Visa: This visa category enables multinational companies to transfer executives, managers, and specialized knowledge employees from their foreign offices to their U.S. branches or subsidiaries.",
        "E-2 Visa: Entrepreneurs and investors from certain treaty countries can apply for the E-2 visa, which allows them to start or manage a business in the United States.",
        "O Visa: Reserved for individuals with extraordinary ability in the sciences, arts, education, business, or athletics, the O visa provides a pathway for professionals to work in their field of expertise in the United States.",
        "TN Visa: Under the North American Free Trade Agreement (NAFTA), Canadian and Mexican professionals in specific occupations can obtain the TN visa to work in the United States temporarily.",
        "Our firm will guide you through the application process, meticulously preparing your petition, supporting documents, and ensuring compliance with all requirements. We understand the significance of your career aspirations and strive to present a strong case that increases your chances of obtaining a favorable outcome.",
        "Whether you are an individual seeking employment in the United States or a business looking to hire foreign talent, we offer strategic advice tailored to your unique circumstances. We work closely with you to understand your goals and objectives, providing expert guidance and representation throughout the entire process.",
        "At Lexom Law, we are committed to your success. Contact us today to schedule a consultation with one of our experienced attorneys and take the first step towards realizing your professional goals in the United States.",
      ],
    },
    {
      icon: assylumIco,
      title: "VAWA",
      modalHead: "VAWA",
      description: [
        "At Lexom Law, we are dedicated to assisting survivors of domestic violence, abuse, and certain crimes through the VAWA (Violence Against Women Act) immigration process. Our compassionate team of immigration attorneys understands the unique challenges faced by survivors and provides comprehensive legal services to help them seek protection and immigration relief in the United States.",
        "The VAWA immigration process is designed to provide a pathway to safety and independence for survivors who have been subjected to abuse by a U.S. citizen or permanent resident spouse, parent, or child. It allows eligible survivors to self-petition for lawful permanent residency without the need for the abuser's sponsorship or involvement.",
        "Our attorneys have extensive experience in handling VAWA cases and are well-versed in the intricacies of the VAWA process. We offer unwavering support and advocate for the rights of survivors throughout the journey towards safety and immigration relief.",
        "Our VAWA services include:",
        "Consultation and Eligibility Assessment: We provide a confidential consultation to understand your unique circumstances and assess your eligibility for VAWA benefits. We will guide you through the criteria and evidence requirements, ensuring you meet the eligibility standards before proceeding with your case.",
        "Document Preparation and Case Development: Our attorneys will assist you in gathering the necessary documentation and evidence to support your VAWA self-petition. This may include police reports, medical records, affidavits, and other supporting materials that substantiate the abuse you have endured. We will work closely with you to develop a comprehensive and persuasive case.",
        "Petition Filing and Advocacy: We will prepare and file your VAWA self-petition with the U.S. Citizenship and Immigration Services (USCIS), advocating for your rights and interests. Our team will navigate the process on your behalf, ensuring all forms and supporting documents are properly completed and submitted.",
        "Ongoing Support and Representation: Our dedicated team will provide ongoing support and representation throughout the VAWA process. We will assist you in preparing for interviews and responding to any requests for additional evidence from USCIS. We will be by your side, advocating for your rights, and guiding you towards a safer and more secure future. We are committed to empowering survivors of domestic violence and abuse through the VAWA immigration process. Our team provides compassionate legal representation, ensuring that your voice is heard, and your rights are protected.",
        "If you are a survivor of domestic violence, abuse, or certain crimes and are seeking immigration relief under VAWA, contact our firm today to schedule a confidential consultation. Our compassionate team is here to guide you through the process, provide unwavering support, and help you build a brighter future free from fear and violence.",
      ],
    },
  ];
  return (
    <div className='planPage immigration'>
      <div className='banner'>
        <div className='container'>
          <h1>Naturalization and Obtaining Citizenship</h1>
        </div>
      </div>
      <div className='container'>
        <section className='sec1 '>
          <div className='row'>
            <div className='col-12'>
              <div className='content'>
                <p>
                  Unlock the doors to U.S. citizenship and embrace a world of
                  opportunities. At Lexom Law, we comprehend the immense
                  significance of obtaining U.S. citizenship and the
                  transformative power it holds for individuals. Our firm
                  specializes in the citizenship process, offering comprehensive
                  legal services designed to guide you seamlessly along the path
                  to becoming a proud U.S. citizen.
                </p>
                <p>
                  The journey towards U.S. citizenship, also known as
                  naturalization, demands meeting specific eligibility criteria
                  and fulfilling various requirements outlined by U.S.
                  immigration laws. With our profound understanding of the
                  naturalization process and our commitment to staying up to
                  date with the latest developments and requirements, we provide
                  you with unparalleled expertise, guidance, and unwavering
                  representation.
                </p>
                <p>Our citizenship services include:</p>
                <p>
                  Eligibility Assessment: We meticulously assess your
                  eligibility for U.S. citizenship, thoroughly examining factors
                  such as your immigration status, length of residency, age, and
                  language proficiency. This comprehensive evaluation ensures
                  that you meet the necessary requirements before embarking on
                  the naturalization process.
                </p>
                <p>
                  Document Preparation: Our firm stands by your side as you
                  gather the required documents for your citizenship
                  application. From your green card and identification to tax
                  returns and supporting materials, we ensure that all forms and
                  supporting documents are impeccably completed and submitted,
                  minimizing the chances of delays or complications in your
                  application.
                </p>
                <p>
                  Application Filing: Guiding you seamlessly through the
                  naturalization application process is our priority. Our
                  seasoned team will diligently assist you in completing the
                  application for naturalization, meticulously reviewing it for
                  accuracy and completeness before submitting it to the
                  appropriate U.S. Citizenship and Immigration Services (USCIS)
                  office.
                </p>
                <p>
                  Interview Preparation: As part of the naturalization process,
                  you will undergo an interview with a USCIS officer. We leave
                  no stone unturned in preparing you for this crucial step. Our
                  firm provides comprehensive interview preparation,
                  familiarizing you with potential questions and equipping you
                  with the knowledge and confidence to present your case with
                  poise and conviction.
                </p>
                <p>
                  Ongoing Support: Throughout your naturalization journey, our
                  dedicated team remains by your side, offering personalized
                  support and guidance. We keep you informed about the progress
                  of your case, address any concerns or questions that arise,
                  and consistently advocate for your best interests at every
                  stage.
                </p>
                <p>
                  At Lexom Law, we are steadfast in our commitment to helping
                  you achieve your cherished goal of U.S. citizenship. Our
                  experienced attorneys provide expert advice, diligent
                  representation, and compassionate support throughout the
                  naturalization process. We grasp the profound significance of
                  this milestone and are dedicated to skillfully navigating the
                  complexities of becoming a U.S. citizen with you.
                </p>
                <p>
                  Take the decisive step forward and contact us today to
                  schedule a consultation. Let our firm assist you in realizing
                  your dream of becoming a U.S. citizen, embracing the rights
                  and privileges that come with it. Together, we will forge a
                  pathway to a brighter future filled with boundless
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <ImmigrationPlan item={iData} /> */}
        <div className='chooseBtn' onClick={() => setShowPayment(true)}>
          Choose a Plan for Nationalization
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

            <DatePickerSection paymentPagePath={"/payment/naturalization"} /> */}
      </div>
    </div>
  );
};

export default Citizenship;
