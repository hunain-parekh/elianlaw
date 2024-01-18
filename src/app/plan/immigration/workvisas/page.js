/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import citizanshipIco from "@/assets/images/citizanshipIco.svg";
import asstetIco from "@/assets/images/asstetIco.svg";
import assylumIco from "@/assets/images/assylumIco.svg";
import familyIco from "@/assets/images/familyIco.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const WorkVisas = ({ setShowPayment }) => {
  const pathname = usePathname();
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
      icon: asstetIco,
      title: "Investment",
      modalHead: "Investment Visas",
      description: [
        "Unlocking business opportunities and investing in the United States can open doors to a world of possibilities. At Lexom Law, we specialize in investment visas, providing comprehensive legal services to individuals and businesses seeking to capitalize on the vibrant U.S. market.",
        "Navigating the complex landscape of investment visas requires in-depth knowledge and a thorough understanding of immigration laws and regulations. Our experienced team of attorneys stays up to date with the latest developments and policies to offer you cutting-edge advice and guidance.	",
        "We assist individuals and entrepreneurs from around the world in obtaining the appropriate investment visa for their specific needs. Some of the common investment visa categories we handle include:",
        "EB-5 Immigrant Investor Visa: The EB-5 program allows foreign investors to obtain lawful permanent residency in the United States by making a qualifying investment and creating a specific number of jobs. We can guide you through the entire EB-5 process, from selecting suitable investment opportunities to filing the necessary petitions and navigating the rigorous requirements.",
        "E-2 Treaty Investor Visa: Investors from certain treaty countries can apply for the E-2 visa, which enables them to establish or manage a business in the United States. We will assist you in understanding the eligibility criteria, preparing the necessary documentation, and strategizing your E-2 visa application.",
        "L-1 Visa for Investors: If you already have a business abroad and wish to expand your operations to the United States, the L-1 visa may be an option for you. This visa category allows multinational companies to transfer executives, managers, and specialized knowledge employees to their U.S. branches or subsidiaries.",
        "Our dedicated team will work closely with you to understand your investment goals and develop a personalized strategy to maximize your chances of success. We will guide you through the intricate process, meticulously preparing your petition, supporting documents, and ensuring compliance with all requirements.",
        "At our firm, we understand the significance of your investment aspirations and the impact they can have on your future. We strive to provide exceptional service, expert advice, and diligent representation to help you navigate the complexities of investment visas.",
        "Whether you are an individual investor or represent a business seeking investment opportunities in the United States, we are here to guide you every step of the way. Contact us today to schedule a consultation with one of our experienced attorneys and take the first step towards realizing your investment dreams in the United States.",
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
          <h1>Work Visas</h1>
        </div>
      </div>
      <div className='container'>
        <section className='sec1 '>
          <div className='row'>
            <div className='col-12'>
              <div className='content'>
                <p>
                  Unlock limitless career opportunities and expand your
                  professional horizons in the United States with Lexom Law. Our
                  dedicated team of immigration law experts specializes in work
                  visas, delivering top-notch legal services to individuals and
                  businesses striving to obtain employment authorization in the
                  U.S.
                </p>
                <p>
                  Mastering the intricate landscape of work visas requires
                  profound knowledge and a keen understand of immigration laws
                  and regulations. Our experienced attorneys remain at the
                  forefront of the field, staying updated with the latest
                  developments and policies to offer you unparalleled advice and
                  guidance.{" "}
                </p>
                <p>
                  Mastering the intricate landscape of work visas requires
                  profound knowledge and a keen understand of immigration laws
                  and regulations. Our experienced attorneys remain at the
                  forefront of the field, staying updated with the latest
                  developments and policies to offer you unparalleled advice and
                  guidance.{" "}
                </p>
                <p>
                  We cater to individuals from diverse professional backgrounds,
                  including skilled workers, professionals, investors, and
                  multinational executives, helping them secure the ideal work
                  visa for their specific needs. Explore some of the
                  sought-after work visa categories we handle with finesse
                </p>
                <p>
                  H-1B Visa: Designed for professionals in specialty
                  occupations, the H-1B visa empowers U.S. employers to hire
                  foreign workers in cutting-edge fields such as IT,
                  engineering, medicine, and more.
                </p>
                <p>
                  L-1 Visa: Seamlessly transfer across borders within
                  multinational companies. Our L-1 visa expertise enables
                  executives, managers, and specialized knowledge employees to
                  relocate to U.S. branches or subsidiaries.
                </p>
                <p>
                  E-2 Visa: Entrepreneurs and investors from select treaty
                  countries can confidently apply for the E-2 visa, unlocking
                  the opportunity to start or manage a thriving business in the
                  United States.
                </p>
                <p>
                  O Visa: Reserved for individuals with extraordinary ability in
                  the sciences, arts, education, business, or athletics, the O
                  visa paves the way for exceptional professionals to showcase
                  their expertise on American soil.
                </p>
                <p>
                  TN Visa: Leverage the advantages of the North American Free
                  Trade Agreement (NAFTA) as a Canadian or Mexican professional
                  in specific occupations, securing the TN visa for temporary
                  work in the United States.
                </p>
                <p>
                  With Lexom Law by your side, you'll be guided through the
                  application process with meticulous attention to detail. Our
                  attorneys will expertly prepare your petition, compile the
                  necessary supporting documents, and ensure unwavering
                  compliance with all requirements. We understand the immense
                  significance of your career aspirations and will present a
                  compelling case that significantly enhances your chances of
                  obtaining a favorable outcome.
                </p>
                <p>
                  Whether you are an ambitious individual seeking employment in
                  the United States or a visionary business looking to harness
                  the power of global talent, we offer strategic advice tailored
                  to your unique circumstances. By working closely with you, we
                  gain a profound understanding of your goals and objectives,
                  providing expert guidance and unwavering representation
                  throughout the entire process.
                </p>
                <p>
                  At Lexom Law, your triumph is our ultimate commitment. Waste
                  no time – contact us today to schedule a consultation with one
                  of our seasoned attorneys and embark on the transformative
                  journey to realizing your professional goals in the United
                  States. The future of your career awaits!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <ImmigrationPlan item={iData} /> */}

        {/* <ImmigrationPlan item={iData} /> */}
        {pathname === "/plan/immigration/workvisas" ? (
          <Link className='chooseBtn' href={"/payment/work"}>
            Choose a Plan for Work
          </Link>
        ) : (
          <div className='chooseBtn' onClick={() => setShowPayment(true)}>
            Choose a Plan for Work
          </div>
        )}

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

            <DatePickerSection paymentPagePath={"/payment/work"} /> */}
      </div>
    </div>
  );
};

export default WorkVisas;
