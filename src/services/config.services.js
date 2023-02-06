import axios from "axios";

const service = axios.create({
    baseURL: "https://portaireapi.herokuapp.com/test/payment",
});

export default service;