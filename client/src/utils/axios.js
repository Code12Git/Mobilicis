import axios from "axios";

const instance = axios.create({
  baseURL: "https://mobiliciscompany.onrender.com/api",
});

export default instance;
