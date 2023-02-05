import { useEffect, useState } from "react";

const useMainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    fetch("https://portaireapi.herokuapp.com/test/payment")
      .then((res) => res.json())
      .then((data) => {
        setPaymentData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { modalOpen, setModalOpen, paymentData };
};

export default useMainPage;
