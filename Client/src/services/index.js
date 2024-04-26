import axios from "axios";
import CartService from "./cart";
const Api = axios.create({
    baseURL: "https://c17-64-n-python-1.onrender.com/api",
});

export { CartService };
export default Api;
