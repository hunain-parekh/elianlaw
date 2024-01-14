import React, { useState, useEffect, useRef } from "react";

// import Modal from "react-bootstrap/Modal";
// import FamilyVisas from "@/app/plan/immigration/family/page";
// import FamilyPayment from "@/app/pages/payment/familyPayment";
// import WorkPayment from "@/app/pages/payment/workPayment";
// import WorkVisas from "@/app/pages/plan/workVisas";
// import InvestmentVisas from "@/app/pages/plan/investmentVisas";
// import InvestmentPayment from "@/app/pages/payment/investmentPayment";
// import AssylumPayment from "@/app/pages/payment/assylum";
// import AssylumVisas from "@/app/pages/plan/assylum";
// import StudentVisaPayment from "@/app/pages/payment/studentVisa";
// import StudentVisas from "@/app/pages/plan/studentVisa";
// import UandTPayment from "@/app/pages/payment/uAndTPayment";
// import UandTVisas from "@/app/pages/plan/uAndTvisas";
// import NaturalizationPayment from "@/app/pages/payment/naturalization";
// import Citizenship from "@/app/pages/plan/citizenship";
// import VawaPayment from "@/app/pages/payment/vavaPAyment";
// import Vawa from "@/app/pages/plan/vawa";
// import DacaPayment from "@/app/pages/payment/daca";
// import Daca from "@/app/pages/plan/daca";
// import OtherVisas from "@/app/pages/plan/otherVisa";
// import backIco from "@/assets/images/backIco.png";

export default function ImmigrationModal({
  show,
  setShowPayment,
  showPayment,
  handleClose,
  modalData,
}) {
  const bottomRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let modal11 = document.getElementById("mod");
    if (modal11) {
      modal11.scrollIntoView({ behavior: "instant" });
    }
  }, [showPayment]);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered ref={bottomRef} id='mod'>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className='goBackPlan' onClick={() => setShowPayment(false)}>
              {showPayment && <img src={backIco} alt='' />}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
          {/* {modalData?.description && modalData?.description.map((item,key)=>(
                <p key={key}>{item}</p>
                ))} */}
          {/* {modalData.showPayment ?
                modalData.paymentComp
                :
                modalData.planComp
                } */}
          {modalData.title == "Family Visas" && (
            <>
              {showPayment ? (
                <FamilyPayment />
              ) : (
                <FamilyVisas setShowPayment={setShowPayment} />
              )}
            </>
          )}
          {modalData.title == "Work Visas" && (
            <>
              {showPayment ? (
                <WorkPayment />
              ) : (
                <WorkVisas setShowPayment={setShowPayment} />
              )}
            </>
          )}
          {modalData.title == "Investment" && (
            <>
              {showPayment ? (
                <InvestmentPayment />
              ) : (
                <InvestmentVisas setShowPayment={setShowPayment} />
              )}
            </>
          )}
          {modalData.title == "Assylum" && (
            <>
              {showPayment ? (
                <AssylumPayment />
              ) : (
                <AssylumVisas setShowPayment={setShowPayment} />
              )}
            </>
          )}
          {modalData.title == "Student Visa" && (
            <>
              {showPayment ? (
                <StudentVisaPayment />
              ) : (
                <StudentVisas setShowPayment={setShowPayment} />
              )}
            </>
          )}
          {modalData.title == "U & T Visas" && (
            <>
              {showPayment ? (
                <UandTPayment />
              ) : (
                <UandTVisas setShowPayment={setShowPayment} />
              )}
            </>
          )}
          {modalData.title == "Nationalization" && (
            <>
              {showPayment ? (
                <NaturalizationPayment />
              ) : (
                <Citizenship setShowPayment={setShowPayment} />
              )}
            </>
          )}
          {modalData.title == "VAWA" && (
            <>
              {showPayment ? (
                <VawaPayment />
              ) : (
                <Vawa setShowPayment={setShowPayment} />
              )}
            </>
          )}
          {modalData.title == "DACA" && (
            <>
              {showPayment ? (
                <DacaPayment />
              ) : (
                <Daca setShowPayment={setShowPayment} />
              )}
            </>
          )}
          {modalData.title == "Other" && <OtherVisas />}
          {/* <p>ahsa</p> */}
        </Modal.Body>
      </Modal>
    </>
  );
}
