"use client";
import React from "react";
import familyIco from "@/assets/images/familyIco.svg";
import citizanshipIco from "@/assets/images/citizanshipIco.svg";
import workIco from "@/assets/images/workIco.svg";
import assylumIco from "@/assets/images/assylumIco.svg";

const OtherVisas = () => {
  const iData = [
    {
      icon: citizanshipIco,
      title: "Citizenship",
      modalHead: "Naturalization and Obtaining Citizenship",
      description: [
        "At My Immigration Hub, we understand the significance of obtaining U.S. citizenship and the rights and opportunities it affords individuals. Our firm specializes in the citizenship process, offering comprehensive legal services to help you navigate the path to becoming a U.S. citizen.",
        "The process of obtaining U.S. citizenship, also known as naturalization, involves meeting specific eligibility criteria and completing various requirements set by U.S. immigration laws. We have an in-depth understanding of the naturalization process and stay updated with the latest developments and requirements to provide you with expert guidance and representation.",
        "Our citizenship services include:",
        "Eligibility Assessment: We will carefully evaluate your eligibility for U.S. citizenship, considering factors such as your immigration status, length of residency, age, and language proficiency. We will provide a thorough analysis of your case, ensuring you meet the necessary requirements before proceeding with the naturalization process.",
        "Document Preparation: Our firm will assist you in gathering the required documents for your citizenship application, such as your green card, identification, tax returns, and other supporting materials. We will ensure that all forms and supporting documents are properly completed and submitted, minimizing the chances of delays or complications in your application.",
        "Application Filing: We will guide you through the naturalization application process, including the completion of the application for naturalization. Our firm will review your application to ensure accuracy and completeness before submitting it to the appropriate U.S. Citizenship and Immigration Services (USCIS) office.",
        "Interview Preparation: As part of the naturalization process, you will be required to attend an interview with a USCIS officer. Our firm will prepare you for the interview, familiarizing you with the types of questions that may be asked and providing guidance on how to best present your case. We will ensure that you are well-prepared and confident for this crucial step.",
        "Ongoing Support: Throughout the naturalization process, our team will provide you with personalized support and guidance. We will keep you informed about the progress of your case, address any concerns or questions you may have, and represent your best interests at every stage.",
        "At My Immigration Hub, we are committed to helping you achieve your goal of U.S. citizenship. Our experienced attorneys will provide expert advice, diligent representation, and compassionate support throughout the naturalization process. We understand the significance of this milestone and are dedicated to helping you navigate the complexities of becoming a U.S. citizen.",
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
        "At our firm My Immigration Hub, we understand the importance of pursuing career opportunities and expanding your professional horizons in the United States. Our immigration law experts specialize in work visas, providing comprehensive legal services to individuals and businesses seeking to obtain employment authorization in the U.S.",
        "Navigating the complex landscape of work visas requires in-depth knowledge and a thorough understanding of immigration laws and regulations. Our experienced team of attorneys stays up to date with the latest developments and policies to offer you cutting-edge advice and guidance.",
        "We assist individuals from diverse professional backgrounds, including skilled workers, professionals, investors, and multinational executives, in obtaining the appropriate work visa for their specific needs. Some of the common work visa categories we handle include:",
        "H-1B Visa: Designed for professionals in specialty occupations, the H-1B visa allows U.S. employers to hire foreign workers in fields such as IT, engineering, medicine, and more.",
        "L-1 Visa: This visa category enables multinational companies to transfer executives, managers, and specialized knowledge employees from their foreign offices to their U.S. branches or subsidiaries.",
        "E-2 Visa: Entrepreneurs and investors from certain treaty countries can apply for the E-2 visa, which allows them to start or manage a business in the United States.",
        "O Visa: Reserved for individuals with extraordinary ability in the sciences, arts, education, business, or athletics, the O visa provides a pathway for professionals to work in their field of expertise in the United States.",
        "TN Visa: Under the North American Free Trade Agreement (NAFTA), Canadian and Mexican professionals in specific occupations can obtain the TN visa to work in the United States temporarily.",
        "Our firm will guide you through the application process, meticulously preparing your petition, supporting documents, and ensuring compliance with all requirements. We understand the significance of your career aspirations and strive to present a strong case that increases your chances of obtaining a favorable outcome.",
        "Whether you are an individual seeking employment in the United States or a business looking to hire foreign talent, we offer strategic advice tailored to your unique circumstances. We work closely with you to understand your goals and objectives, providing expert guidance and representation throughout the entire process.",
        "At My Immigration Hub, we are committed to your success. Contact us today to schedule a consultation with one of our experienced attorneys and take the first step towards realizing your professional goals in the United States.",
      ],
    },
    {
      icon: assylumIco,
      title: "Assylum",
      modalHead: "Assylum",
      description: [
        "At My Immigration Hub, we are committed to protecting the rights of individuals fleeing persecution and seeking safety in the United States. Our dedicated team of immigration attorneys specializes in asylum and refugee law, providing comprehensive legal services to those seeking protection and a new beginning.",
        "The asylum and refugee process can be complex and daunting, requiring a deep understanding of immigration laws, international human rights, and the specific challenges faced by individuals fleeing their home countries. Our experienced attorneys are knowledgeable in these areas and stay updated with the latest developments and policies to offer you the highest level of representation.",
        "We offer assistance to individuals seeking asylum or refugee status in the United States, guiding them through every step of the process. Our team will help you compile the necessary evidence, prepare a compelling case, and navigate the intricate legal requirements to present a strong application to the U.S. government.",
        "Our services in asylum and refugee law include:",
        "Asylum Petitions: If you have arrived in the United States and fear persecution in your home country based on your race, religion, nationality, political opinion, or membership in a particular social group, we can assist you in applying for asylum. Our firm will help gather supporting evidence, prepare you for interviews, and advocate for your case before the asylum officers or immigration judges.",
        "Refugee Applications: If you are currently outside the United States and meet the definition of a refugee, we can guide you through the refugee application process. Our team will help you prepare a compelling case, gather supporting documentation, and navigate the refugee resettlement procedures.",
        "We understand the challenges and emotional toll that individuals seeking asylum or refugee status face. Our compassionate approach ensures that we listen to your unique story, understand your circumstances, and provide you with the guidance and support needed to navigate the complexities of the process.",
        "At My Immigration Hub we are dedicated to upholding human rights and protecting individuals in vulnerable situations. We will stand by your side, fighting for your rights and tirelessly advocating for your asylum or refugee claim.",
        "If you are seeking asylum or refugee status in the United States, contact our firm today to schedule a consultation. Our experienced attorneys are here to provide the expert legal representation you need to secure a safe and promising future.",
      ],
    },
  ];

  return (
    <div className='planPage immigration'>
      <div className='banner'>
        <div className='container'>
          <h1>Other Visa Categories</h1>
        </div>
      </div>
      <div className='container'>
        <section className='sec1 '>
          <div className='row'>
            <div className='col-12'>
              <div className='content'>
                <p>
                  Unlock boundless opportunities in the United States with Lexom
                  Law. As a leading immigration law firm, we offer comprehensive
                  immigration services to individuals and businesses seeking
                  various types of visas to enter and thrive legally in the
                  United States. Our mission is to provide expert guidance and
                  dedicated representation, ensuring a seamless and successful
                  visa application process.
                </p>
                <p>
                  In addition to the specified visa categories outlined on our
                  website, we specialize in a wide range of other visa
                  categories designed to cater to your unique needs. Here are
                  just a few examples:
                </p>
                <p>
                  Visitor Visas: Planning a visit to the United States for
                  tourism, medical treatment, or business? Our skilled attorneys
                  can assist you in obtaining B-1/B-2 visitor visas. We&apos;ll
                  navigate the application process with precision, ensuring your
                  case is compelling and meets all necessary requirements.
                </p>
                <p>
                  Exchange Visitor Visas: Engaging in an exchange program,
                  whether as a student, researcher, teacher, or cultural
                  participant? Our team will expertly guide you through the J-1
                  visa application process, ensuring compliance with program
                  requirements and a smooth transition to your exchange
                  experience.
                </p>
                <p>
                  Extraordinary Ability Visas: If you possess exceptional skills
                  or talents in fields such as science, arts, athletics, or
                  business, our experienced attorneys can assist you in
                  obtaining visas based on extraordinary ability, such as the
                  O-1 visa. We&apos;ll work closely with you, compiling the necessary
                  evidence to present a compelling case that showcases your
                  extraordinary abilities.
                </p>
                <p>
                  NIW Visas: Are you engaged in work that serves the national
                  interest of the United States? Our firm specializes in
                  National Interest Waiver (NIW) visas, assisting individuals in
                  navigating the complex requirements and presenting a strong
                  case to USCIS. With an NIW visa, you can pave the way towards
                  permanent residency and, ultimately, citizenship.
                </p>
                <p>
                  Family-Based Visas: Reuniting with your loved ones in the
                  United States is our priority. We provide expert assistance in
                  family-based visas, including fiancé(e) visas (K-1) for those
                  engaged to U.S. citizens. Our team will guide you through the
                  application process, ensuring a smooth journey towards
                  bringing your family together.
                </p>
                <p>
                  Specialized Visas: Our firm&apos;s expertise extends to specialized
                  visa categories, including religious worker visas (R-1) and
                  visas for individuals with extraordinary ability in the arts
                  or athletics (P visas). We possess the in-depth knowledge to
                  navigate the unique requirements of these visas and provide
                  dedicated support to our clients.
                </p>
                <p>
                  At My Immigration Hub, we understand the paramount importance of
                  obtaining the right visa for your specific needs. Our seasoned
                  attorneys possess the knowledge and experience to guide you
                  through the complex visa application process, handling your
                  case with the utmost care and precision.
                </p>
                <p>
                  Take the first step towards realizing your immigration goals
                  by contacting us today to schedule a consultation. Our team is
                  ready to provide the expert advice and representation you need
                  to navigate the intricacies of the U.S. immigration system and
                  unlock a world of possibilities in the United States..
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <ImmigrationPlan item={iData} /> */}

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

        <DatePickerSection /> */}
      </div>
    </div>
  );
};

export default OtherVisas;
