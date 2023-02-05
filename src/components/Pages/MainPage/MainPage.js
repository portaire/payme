import React from "react";
import css from "./MainPage.module.css";
import ModalButton from "../../Elements/ModalButton/ModalButton";
import Modal from "../../Elements/Modal";
import useMainPage from "./MainPage.hook";
import { createPortal } from "react-dom";
import UpdatePaymentForm from "../../Elements/UpdatePaymentForm";

const MainPage = () => {
  const { modalOpen, setModalOpen, paymentData } = useMainPage();

  return (
    <div className={css.mainPage}>
      <ModalButton onClick={() => setModalOpen(true)} />

      {modalOpen &&
        createPortal(
          <Modal setModalOpen={setModalOpen}>
            <UpdatePaymentForm data={paymentData} setModalOpen={setModalOpen} />
          </Modal>,
          document.querySelector("#modal")
        )}
    </div>
  );
};

export default MainPage;
