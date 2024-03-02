'use client'
import React from "react";
import familyIco from "@/assets/images/familyIco.svg";
import citizanshipIco from "@/assets/images/citizanshipIco.svg";
import workIco from "@/assets/images/workIco.svg";
import assylumIco from "@/assets/images/assylumIco.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Daca = ({ setShowPayment }) => {
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
      icon: workIco,
      title: "Student Visas",
      modalHead: "Student Visas",
      description: [
        "At Lexom Law, we understand the significance of pursuing education in the United States and the opportunities it provides for international students. Our dedicated team of immigration attorneys specializes in student visa law and is committed to helping students from around the world navigate the process of obtaining a student visa to study in the United States.",
        "Obtaining a student visa is an essential step for individuals who wish to pursue academic or vocational studies at a U.S. educational institution. The student visa allows students to enter the United States, enroll in an approved program, and engage in their chosen course of study.",
        "Our attorneys have extensive experience in handling student visa cases and are expertise in the intricacies of the student visa process. We offer comprehensive support and guidance to help you navigate the requirements and ensure a smooth application process.",
        "Our student visa services include:",
        "Visa Guidance: We provide personalized guidance and assistance in determining the most appropriate student visa category for your educational goals. Whether you are applying for an F visa for academic studies, an M visa for vocational training, or a J visa for exchange programs, we will help you understand the specific requirements and navigate the application process.",
        "Document Preparation: Our attorneys will assist you in gathering the necessary documents and supporting evidence to demonstrate your eligibility for a student visa. This may include acceptance letters from U.S. educational institutions, proof of financial support, academic transcripts, and other relevant materials required by the U.S. embassy or consulate.",
        "Application Submission: We will guide you through the process of completing the visa application forms accurately and thoroughly. Our team will ensure that all necessary documents are properly organized and submitted to the appropriate U.S. embassy or consulate in a timely manner.",
        "Interview Preparation: As part of the student visa process, you may be required to attend an interview at the U.S. embassy or consulate. Our firm will provide you with guidance on interview techniques, help you anticipate potential questions, and ensure that you are well-prepared to present your case confidently.",
        "Visa Extensions and Change of Status: If you are already studying in the United States on a student visa and need assistance with visa extensions or a change of status, we can help. Our firm will navigate the complex processes involved, ensuring your continued lawful presence in the country.",
        "At Lexom Law, we understand the importance of your educational journey and are dedicated to helping you navigate the student visa process. Our experienced attorneys provide expert advice, diligent representation, and personalized support to ensure that your transition to studying in the United States is smooth and successful.",
        "Contact us today to schedule a consultation and let us assist you in obtaining a student visa and fulfilling your academic aspirations in the United States.",
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
          <h1>DACA</h1>
        </div>
      </div>
      <div className='container'>
        <section className='sec1 '>
          <div className='row'>
            <div className='col-12'>
              <div className='content'>
                <p>
                  At Lexom Law, we understand the importance of the DACA
                  (Deferred Action for Childhood Arrivals) program and the
                  opportunities it provides for eligible individuals who were
                  brought to the United States as children. Our dedicated team
                  of immigration attorneys specializes in DACA law and is
                  committed to helping eligible individuals navigate the DACA
                  process to obtain protection from deportation and work
                  authorization.
                </p>
                <p>
                  DACA is a program that offers temporary relief from
                  deportation and provides eligible individuals, often referred
                  to as Dreamers, with work authorization. It allows young
                  people who meet specific criteria to remain in the United
                  States, pursue education, and contribute to their communities
                  without the constant fear of removal.
                </p>
                <p>
                  Our firm have a deep understanding of the DACA program, and
                  the requirements involved. We are dedicated to guiding you
                  through the DACA application process, ensuring that your
                  rights are protected, and advocating for your case with
                  expertise and compassion.
                </p>
                <p>Our DACA services include:</p>
                <p>
                  Eligibility Evaluation: We will assess your eligibility for
                  the DACA program based on the specific criteria set by U.S.
                  immigration laws. This includes factors such as age, arrival
                  date, continuous residence, education, and criminal history.
                  We will provide a thorough evaluation to determine if you meet
                  the DACA eligibility requirements.
                </p>
                <p>
                  Application Preparation: Our attorneys will assist you in
                  gathering the necessary documents and information to support
                  your DACA application. We will help you complete the required
                  forms accurately and ensure that all supporting evidence is
                  properly compiled and submitted.
                </p>
                <p>
                  Submission and Follow-Up: We will submit your DACA application
                  on your behalf to the appropriate U.S. Citizenship and
                  Immigration Services (USCIS) office. Our team will closely
                  monitor the progress of your application, respond to any
                  requests for additional information, and ensure that your case
                  moves forward smoothly and efficiently.
                </p>
                <p>
                  Renewals and Updates: If you are already a DACA recipient, we
                  can assist you with the renewal process to ensure that your
                  protection and work authorization remain valid. Additionally,
                  we can help you with any updates or changes to your DACA
                  status, such as updating your address or obtaining a new
                  employment authorization document (EAD).
                </p>
                <p>
                  Ongoing Support: Our dedicated team will provide ongoing
                  support throughout your DACA journey. We will address any
                  questions or concerns you may have, keep you informed about
                  the latest developments, and provide guidance on maintaining
                  your DACA status.
                </p>
                <p>
                  At Lexom Law, we understand the importance of the DACA program
                  in providing relief and opportunities for Dreamers. Our
                  experienced attorneys are committed to helping eligible
                  individuals navigate the DACA process and secure the
                  protection and work authorization they deserve.
                </p>
                <p>
                  If you believe you may be eligible for DACA or need assistance
                  with a DACA application or renewal, contact our firm today to
                  schedule a consultation. We are here to guide you through the
                  process, provide dedicated support, and help you pursue your
                  dreams in the United States.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <ImmigrationPlan item={iData} /> */}

        {pathname === "/plan/immigration/daca" ? (
          <Link className='chooseBtn' href={"/payment/daca"}>
            Choose a Plan for DACA
          </Link>
        ) : (
          <div className='chooseBtn' onClick={() => setShowPayment(true)}>
            Choose a Plan for DACA
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

            <DatePickerSection  paymentPagePath={"/payment/daca"} /> */}
      </div>
    </div>
  );
};

export default Daca;
