'use client'
import OtherVisas from "@/app/plan/immigration/other/page";
import React, {  useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import FamilyVisas from "@/app/plan/immigration/family/page";
import FamilyPayment from "@/app/payment/family/page";
import WorkPayment from "@/app/payment/work/page";
import WorkVisas from "@/app/plan/immigration/workvisas/page";
import InvestmentPayment from "@/app/payment/investment/page";
import InvestmentVisas from "@/app/plan/immigration/investmentvisas/page";
import AssylumPayment from "@/app/payment/assylum/page";
import AssylumVisas from "@/app/plan/immigration/assylumvisas/page";
import StudentVisaPayment from "@/app/payment/studentvisa/page";
import StudentVisas from "@/app/plan/immigration/studentvisa/page";
import DacaPayment from "@/app/payment/daca/page";
import Daca from "@/app/plan/immigration/daca/page";
import VawaPayment from "@/app/payment/vawa/page";
import Vawa from "@/app/plan/immigration/vawa/page";
import NaturalizationPayment from "@/app/payment/naturalization/page";
import UandTPayment from "@/app/payment/uandt/page";
import UandTVisas from "@/app/plan/immigration/uandtvisas/page";
import backIco from "@/assets/images/backIco.png";
import Image from 'next/image'
import Citizenship from "@/app/plan/immigration/citizenship/page";

const ImmigrationModal = ({ show, setShowPayment, showPayment, handleClose, modalData }) => {
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
    <Modal show={show} onHide={handleClose} centered ref={bottomRef} id='mod'>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className='goBackPlan' onClick={() => setShowPayment(false)}>
            {showPayment && <Image src={backIco} alt='' width={30}/>}
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
  );
};

export default ImmigrationModal;

