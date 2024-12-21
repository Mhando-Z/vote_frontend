import axios from "axios";
import Cookies from "js-cookie";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Your backend API URL
  headers: {
    "Content-Type": "application/json", // Ensure the content type is JSON
  },
});

// Add request interceptor to attach the Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from cookies (where it is stored after login)
    const token = Cookies.get("token"); // Assuming token is stored in a cookie named 'token'

    // If token exists, add it to Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config; // Return modified config with token
  },
  (error) => {
    return Promise.reject(error); // Reject if there is an error in the request
  }
);

export default axiosInstance;
