'use client'
import React from "react";
import familyIco from "@/assets/images/familyIco.svg";
import citizanshipIco from "@/assets/images/citizanshipIco.svg";
import workIco from "@/assets/images/workIco.svg";
import assylumIco from "@/assets/images/assylumIco.svg";

const StudentVisas = ({ setShowPayment }) => {
  const iData = [
    {
      icon: citizanshipIco,
      title: "Others",
      modalHead: "Others",
      description: [
        "At Lexom Law, we offer comprehensive immigration services to individuals and businesses seeking various types of visas to enter and stay legally in the United States. We understand the complexities of the U.S. immigration system and provides expert guidance and representation in navigating the visa application process.",
        "In addition to specified visa categories on our website, we handle a wide range of other visa categories such as below:",
        "Visitor Visas: If you are planning to visit the United States for tourism, medical treatment, or business purposes, we can help you obtain B-1/B-2 visitor visas. We will guide you through the application process, ensuring that you present a strong case for your temporary visit and meet the necessary requirements.",
        "Exchange Visitor Visas: We assist individuals participating in exchange programs, including the J-1 visa category. Whether you are a student, researcher, teacher, or participating in a cultural exchange program, our attorneys will help you navigate the J-1 visa application process and ensure compliance with program requirements.",
        "Extraordinary Ability Visas: If you possess exceptional skills or talents in fields such as science, arts, athletics, or business, we can assist you in obtaining visas based on extraordinary ability, such as the O-1 visa. The O-1 is a nonimmigrant visa intended for temporary work in the US. Our attorneys will work closely with you to gather the necessary evidence and present a compelling case to demonstrate your extraordinary ability.",
        "NIW Visas: The National Interest Waiver (NIW) visa is designed for individuals who can demonstrate that their work is in the national interest of the United States. Our attorneys have extensive experience in assisting individuals with NIW visa applications, guiding them through the complex requirements and ensuring a strong case is presented to USCIS. NIW puts you on a path to becoming a permanent resident, and eventually a citizen.",
        "Family-Based Visas: We provide assistance to individuals seeking family-based visas, including fiancé(e) visas (K-1) for individuals engaged to U.S. citizens. We will guide you through the application process and help you reunite with your loved ones in the United States.",
        "Specialized Visas: Our firm also handles specialized visa categories, such as religious worker visas (R-1), visas for individuals with extraordinary ability in the arts or athletics (P visas). We have the expertise to navigate the unique requirements of these visas and provide dedicated support to our clients.",
        "At Lexom Law, we understand the importance of obtaining the right visa for your specific needs. Our attorneys have the knowledge and experience to guide you through the visa application process, ensuring that your case is handled with care and precision.",
        "Contact us today to schedule a consultation. We are here to provide the expert advice and representation you need to navigate the complexities of the U.S. immigration system and achieve your immigration goals.",
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
      title: "Assylum",
      modalHead: "Assylum",
      description: [
        "At Lexom Law, we are committed to protecting the rights of individuals fleeing persecution and seeking safety in the United States. Our dedicated team of immigration attorneys specializes in asylum and refugee law, providing comprehensive legal services to those seeking protection and a new beginning.",
        "The asylum and refugee process can be complex and daunting, requiring a deep understanding of immigration laws, international human rights, and the specific challenges faced by individuals fleeing their home countries. Our experienced attorneys are knowledgeable in these areas and stay updated with the latest developments and policies to offer you the highest level of representation.",
        "We offer assistance to individuals seeking asylum or refugee status in the United States, guiding them through every step of the process. Our team will help you compile the necessary evidence, prepare a compelling case, and navigate the intricate legal requirements to present a strong application to the U.S. government.",
        "Our services in asylum and refugee law include:",
        "Asylum Petitions: If you have arrived in the United States and fear persecution in your home country based on your race, religion, nationality, political opinion, or membership in a particular social group, we can assist you in applying for asylum. Our firm will help gather supporting evidence, prepare you for interviews, and advocate for your case before the asylum officers or immigration judges.",
        "Refugee Applications: If you are currently outside the United States and meet the definition of a refugee, we can guide you through the refugee application process. Our team will help you prepare a compelling case, gather supporting documentation, and navigate the refugee resettlement procedures.",
        "We understand the challenges and emotional toll that individuals seeking asylum or refugee status face. Our compassionate approach ensures that we listen to your unique story, understand your circumstances, and provide you with the guidance and support needed to navigate the complexities of the process.",
        "At Lexom Law we are dedicated to upholding human rights and protecting individuals in vulnerable situations. We will stand by your side, fighting for your rights and tirelessly advocating for your asylum or refugee claim.",
        "If you are seeking asylum or refugee status in the United States, contact our firm today to schedule a consultation. Our experienced attorneys are here to provide the expert legal representation you need to secure a safe and promising future.",
      ],
    },
  ];
  return (
    <div className='planPage immigration'>
      <div className='banner'>
        <div className='container'>
          <h1>Student Visas</h1>
        </div>
      </div>
      <div className='container'>
        <section className='sec1 '>
          <div className='row'>
            <div className='col-12'>
              <div className='content'>
                <p>
                  Unlock the gateway to educational excellence in the United
                  States. At Lexom Law, we recognize the profound importance of
                  pursuing education abroad and the boundless opportunities it
                  offers to international students. Our team of immigration
                  attorneys specializes in student visa law and is passionately
                  committed to guiding students from all corners of the world
                  through the process of obtaining a student visa to study in
                  the United States.
                </p>
                <p>
                  Securing a student visa is an indispensable milestone for
                  individuals aspiring to engage in academic or vocational
                  studies at a U.S. educational institution. This visa enables
                  students to enter the United States, enroll in an approved
                  program, and immerse themselves in their chosen course of
                  study.
                </p>
                <p>
                  With extensive experience in handling student visa cases and
                  an intimate understanding of the intricacies of the student
                  visa process, our attorneys provide unwavering support and
                  expert guidance to streamline your journey and ensure a
                  seamless application process.
                </p>
                <p>Our comprehensive student visa services include:</p>
                <p>
                  Visa Guidance: We offer personalized guidance and tailored
                  assistance to help you determine the most suitable student
                  visa category aligned with your educational aspirations.
                  Whether you are pursuing an F visa for academic studies, an M
                  visa for vocational training, or a J visa for exchange
                  programs, we will navigate the specific requirements and
                  intricacies of the application process with you.
                </p>
                <p>
                  Document Preparation: Our attorneys will skillfully assist you
                  in compiling the necessary documents and supporting evidence
                  to substantiate your eligibility for a student visa. This may
                  encompass acceptance letters from esteemed U.S. educational
                  institutions, proof of financial support, academic
                  transcripts, and other pertinent materials required by the
                  U.S. embassy or consulate.
                </p>
                <p>
                  Application Submission: We will meticulously guide you through
                  the process of completing the visa application forms
                  accurately and thoroughly. Our dedicated team ensures that all
                  essential documents are meticulously organized and submitted
                  to the appropriate U.S. embassy or consulate promptly,
                  ensuring a streamlined and efficient process.
                </p>
                <p>
                  Interview Preparation: As part of the student visa process,
                  you may be required to attend an interview at the U.S. embassy
                  or consulate. Our firm provides comprehensive guidance on
                  interview techniques, assists you in anticipating potential
                  questions, and ensures that you are fully prepared to
                  confidently present your case.
                </p>
                <p>
                  Visa Extensions and Change of Status: If you are already
                  studying in the United States on a student visa and require
                  assistance with visa extensions or a change of status, we are
                  here to help. Our team will adeptly navigate the intricate
                  processes involved, ensuring your continued lawful presence in
                  the country.
                </p>
                <p>
                  At Lexom Law, we comprehend the profound significance of your
                  educational journey and are dedicated to guiding you through
                  the student visa process with unwavering support. Our
                  experienced attorneys provide expert advice, diligent
                  representation, and personalized assistance, ensuring that
                  your transition to studying in the United States is seamless
                  and successful.
                </p>
                <p>
                  Embark on your academic adventure today by contacting us to
                  schedule a consultation. Let us accompany you on the path to
                  obtaining a student visa and fulfilling your academic
                  aspirations in the United States.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <ImmigrationPlan item={iData} /> */}

        <div className='chooseBtn' onClick={() => setShowPayment(true)}>
          Choose a Plan for Student
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

            <DatePickerSection paymentPagePath={"/payment/studentvisa"} /> */}
      </div>
    </div>
  );
};

export default StudentVisas;
