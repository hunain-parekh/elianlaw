"use client";
import React, { useEffect } from "react";
import familyIco from "@/assets/images/familyIco.svg";
import citizanshipIco from "@/assets/images/citizanshipIco.svg";
import workIco from "@/assets/images/workIco.svg";
import assylumIco from "@/assets/images/assylumIco.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AssylumVisas = ({ setShowPayment }) => {
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
      title: "U & T Visas",
      modalHead: "U Visas and T Visas:",
      description: [
        "At My Immigration Hub, we are committed to providing comprehensive legal services to victims of crime, helping them seek protection and legal status in the United States through U visas and T visas. Our experienced team of immigration attorneys specializes in U visa and T visa law, offering compassionate support and advocacy to individuals who have been victims of qualifying crimes.",
        "U Visa:",
        "The U visa is designed for victims of certain crimes who have suffered mental or physical abuse and are willing to assist law enforcement in the investigation or prosecution of criminal activity. This visa not only offers victims a path to legal status in the United States but also provides access to critical support services.",
        "Our attorneys have a deep understanding of the U visa process and the requirements involved. We are dedicated to guiding you through the application, ensuring that your rights are protected, and advocating for your case with compassion and expertise. From evaluating your eligibility to gathering evidence and preparing your U visa petition, we will provide comprehensive assistance every step of the way.",
        "T Visa:",
        "The T visa is available for victims of human trafficking who have been subjected to severe forms of trafficking and are present in the United States as a result of trafficking. This visa provides victims with protection, legal status, and access to critical resources and benefits.",
        "At our firm, we recognize the immense challenges faced by victims of human trafficking, and we are committed to providing unwavering support throughout the T visa application process. Our experienced attorneys will help you navigate the intricate requirements, gather the necessary evidence, and prepare a compelling T visa petition, ensuring your rights and interests are represented.",
        "Our U Visa and T Visa services include:",
        "Evaluating Eligibility: We will assess your situation and determine if you meet the eligibility criteria for a U visa or T visa. This includes establishing that you are a victim of a qualifying crime or human trafficking and fulfilling the other requirements outlined in the respective visa categories.",
        "Gathering Evidence: We will assist you in compiling the necessary documentation and evidence to support your U visa or T visa application. This may include police reports, medical records, affidavits, and other supporting materials that demonstrate the impact of the crime or trafficking on your life.",
        "Collaboration with Law Enforcement: Collaboration with law enforcement agencies is a vital aspect of both U visa and T visa applications. Our attorneys will work closely with law enforcement officials to obtain the necessary certifications and support your application.",
        "Preparation of Visa Petitions: We will meticulously prepare your U visa or T visa petition, ensuring all required forms and supporting documents are complete and accurate. Our goal is to present a compelling case that highlights the significance of your victimization and demonstrates your eligibility for the visa.",
        "Ongoing Support: Throughout the application process, our team will provide personalized guidance and support. We will keep you informed about the progress of your case, respond to any queries or concerns, and advocate for your rights and well-being.",
        "At My Immigration Hub, we are dedicated to supporting victims of crime and human trafficking on their journey towards healing and justice. We provide compassionate legal representation, ensuring that your voice is heard, and your rights are protected.",
        "If you have been a victim of a qualifying crime or human trafficking and are seeking legal status and protection in the United States, contact our firm today to schedule a consultation. Our experienced U visa and T visa attorneys are here to guide you through the process, provide compassionate support, and help you build a brighter future.",
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
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='planPage immigration'>
      <div className='banner'>
        <div className='container'>
          <h1>Asylum and Refugee</h1>
        </div>
      </div>
      <div className='container'>
        <section className='sec1 '>
          <div className='row'>
            <div className='col-12'>
              <div className='content'>
                <p>
                  Embark on a new beginning with unwavering legal support and
                  protection. At My Immigration Hub, we are passionately committed to
                  safeguarding the rights of individuals fleeing persecution and
                  seeking safety in the United States. Our dedicated team of
                  immigration attorneys specializes in asylum and refugee law,
                  providing comprehensive legal services to those in search of
                  protection and a fresh start.
                </p>
                <p>
                  Navigating the complex asylum and refugee process can be
                  daunting, requiring a deep understanding of immigration laws,
                  international human rights, and the unique challenges faced by
                  individuals forced to leave their homes. Rest assured, our
                  experienced attorneys possess the necessary expertise in these
                  areas and remain at the forefront, staying updated with the
                  latest developments and policies to offer you the highest
                  level of representation.
                </p>
                <p>
                  Our firm is here to offer invaluable assistance to individuals
                  seeking asylum or refugee status in the United States, guiding
                  them through every step of the process. With our unwavering
                  support, we will skillfully help you compile the necessary
                  evidence, craft a compelling case, and navigate the intricate
                  legal requirements to present a strong application to the U.S.
                  government.
                </p>
                <p>
                  Our comprehensive services in asylum and refugee law include:
                </p>
                <p>
                  Asylum Petitions: If you have arrived in the United States and
                  fear persecution in your home country based on your race,
                  religion, nationality, political opinion, or membership in a
                  particular social group, we are your dedicated advocates. Our
                  firm will meticulously gather supporting evidence, thoroughly
                  prepare you for interviews, and passionately advocate for your
                  case before asylum officers or immigration judges.
                </p>
                <p>
                  Refugee Applications: If you are currently residing outside
                  the United States and meet the definition of a refugee, our
                  expert team will skillfully guide you through the refugee
                  application process. We will assist you in preparing a
                  compelling case, meticulously gather supporting documentation,
                  and expertly navigate the complex refugee resettlement
                  procedures.
                </p>
                <p>
                  We wholeheartedly understand the immense challenges and
                  emotional toll that individuals seeking asylum or refugee
                  status face. Our compassionate approach ensures that we truly
                  listen to your unique story, fully grasp your circumstances,
                  and provide you with the unwavering guidance and support
                  needed to navigate the complexities of the process.
                </p>
                <p>
                  At My Immigration Hub, we are unwavering in our dedication to upholding
                  human rights and protecting individuals in vulnerable
                  situations. Rest assured, we will tenaciously stand by your
                  side, fiercely fighting for your rights, and tirelessly
                  advocating for your asylum or refugee claim.
                </p>
                <p>
                  If you are seeking asylum or refugee status in the United
                  States, take the decisive step towards a safe and promising
                  future. Contact our firm today to schedule a consultation. Our
                  experienced attorneys are here to provide you with the expert
                  legal representation you need to secure the protection you
                  deserve. Together, let us pave the way to a brighter tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <ImmigrationPlan item={iData} /> */}
        {pathname === "/plan/immigration/assylumvisas" ? (
          <Link className='chooseBtn' href={"/payment/assylum"}>
            Choose a Plan for Asylum
          </Link>
        ) : (
          <div className='chooseBtn' onClick={() => setShowPayment(true)}>
            Choose a Plan for Asylum
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

        <DatePickerSection paymentPagePath={"/payment/assylum"} /> */}
      </div>
    </div>
  );
};

export default AssylumVisas;
