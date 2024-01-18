"use client";
import React, { useState, useEffect } from "react";
import ImmigrationModal from "./ImmigrationModal";
import Image from "next/image";

const ImmigrationPlan = ({ item }) => {
  const [modalData, setModalData] = useState({
    description: [],
  });
  const [showPayment, setShowPayment] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowPayment(false);
  };
  const handleShow = (item) => {
    setShow(true);
    setModalData(item);
  };
  console.log(modalData.showPayment);

  return (
    <>
      <section className='immigrationPlanSec'>
        <div className='head'>Immigration Plans</div>
        <div className='row jc-center'>
          {item?.map((val, key) => (
            <div className='col-lg-3 col-6 mb-4' key={key}>
              <div className='plan' onClick={() => handleShow(val)}>
                <div className='icon'>
                  <Image className='img-fluid' src={val?.icon} alt='' width={82} />
                </div>
                <div className='title'>{val.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ImmigrationModal
        show={show}
        setShowPayment={setShowPayment}
        showPayment={showPayment}
        handleClose={handleClose}
        modalData={modalData}
      />
    </>
  );
};

export default ImmigrationPlan;
