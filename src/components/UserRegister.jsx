"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Dots, Spinner } from "react-activity";
import { CheckCircle, Mail, User, RefreshCw } from "lucide-react";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";

const MotionCheckCircle = motion(CheckCircle);

export const Notifier = ({ data, setView }) => {
  const [isLoading, setIsLoading] = useState(false);

  // async function resendVerificationEmail(email) {
  //   setIsLoading(true);

  //   try {
  //     const response = await axiosInstance.post(
  //       "/hat-users/resend-email-verification/",
  //       { email }
  //     );

  //     if (response.status === 200) {
  //       toast.success("Verification email resent. Please check your inbox.");
  //     } else {
  //       toast.error(response.data.detail || "Unexpected error. Try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error resending verification email:", error);
  //     if (error.response) {
  //     } else if (error.request) {
  //       // Request made but no response received
  //       toast.error("No response from the server. Please check your network.");
  //     } else {
  //       // Something else went wrong
  //       toast.error("Error: " + error.message);
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  const handleClick = (email) => {
    resendVerificationEmail(email);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center bg-opacity-50 backdrop-blur-xl"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-md p-8 mx-4 bg-white rounded-lg shadow-2xl "
      >
        <div className="flex flex-col items-center text-center">
          <MotionCheckCircle
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-20 h-20 mb-4 text-green-500"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-2 text-2xl font-bold text-gray-800"
          >
            Success!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6 text-gray-600"
          >
            Your account has been created successfully.
          </motion.p>
          <div className="w-full mb-6 space-y-2">
            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
              <div className="flex items-center space-x-2">
                <User className="text-gray-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Username:
                </span>
              </div>
              <span className="text-gray-800">{data?.username}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Email:
                </span>
              </div>
              <span className="text-gray-800">{data?.email}</span>
            </div>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            Please check your email for the verification link. If you didnt
            receive it, you can request a new one.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(data?.email)}
            className="flex items-center justify-center px-6 py-2 space-x-2 font-medium text-white transition-colors duration-300 bg-blue-500 rounded-full hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? (
              <RefreshCw className="animate-spin" />
            ) : (
              <>
                <div className="flex flex-row items-center gap-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Resend Verification</span>
                  {/* <span>Login</span> */}
                </div>
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const UserRegister = ({ handleRegistration }) => {
  const [error, setError] = useState([]);
  const [view, setView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError([]);
    try {
      await axiosInstance.post("hat-users/register/", formData);
      // Save generated token from back-end to local storage
      setLoading(false);
      setView(true); // Display the Notifier component
    } catch (error) {
      toast.error("User Registration failed");
      setLoading(false);
      setError(error.response.data);
    }
  };

  // toggle show password functions
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`flex relative flex-col h-full items-center justify-center text-sm lg:text-md`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
        className="flex flex-col w-full md:max-w-lg xl:p-10"
      >
        <div className="mb-6 sm:mx-auto sm:w-full">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.7 }}
            className="text-2xl dark:text-gray-300 font-Raleway md:text-3xl"
          >
            Sign Up
          </motion.h1>
        </div>
        {loading ? (
          <div className={`h-14 items-center justify-center flex `}>
            <Spinner color="#b67a3d" size={35} speed={3} animating={true} />
          </div>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <motion.input
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              whileFocus={{ width: [0, "100%"] }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full bg-inherit px-1 outline-none sm:py-2 py-1.5  border-b-2 border-green-600"
              required
            />
            <div className="flex justify-end w-full mt-1 text-red-600 lg:items-end">
              <p>{error?.email ? error?.email[0] : ""}</p>
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 dark:text-gray-300"
            >
              Username
            </label>
            <motion.input
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              whileFocus={{ width: [0, "100%"] }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full bg-inherit px-1 outline-none sm:py-2 py-1.5  border-b-2 border-green-600"
              required
            />
            <div className="flex justify-end w-full mt-1 text-red-600 lg:items-end">
              <p>{error?.username ? error?.username[0] : ""}</p>
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <div className="relative">
              <motion.input
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                whileFocus={{ width: [0, "100%"] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full bg-inherit px-1 outline-none sm:py-2 py-1.5  border-b-2 border-green-600"
                required
              />
              <button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            <div className="flex justify-end w-full mt-1 text-red-600 lg:items-end">
              <p>{error?.password ? error?.password[0] : ""}</p>
            </div>
          </div>
          <div>
            <label
              htmlFor="password2"
              className="block text-gray-700 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <div className="relative">
              <motion.input
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                whileFocus={{ width: [0, "100%"] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                type={showPassword ? "text" : "password"}
                id="password2"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                className="mt-1 block w-full bg-inherit px-1 outline-none sm:py-2 py-1.5  border-b-2 border-green-600"
                required
              />
              <button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-400" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            <div className="flex justify-end w-full mt-1 text-red-600 lg:items-end">
              <p>{error?.password ? error?.password[0] : ""}</p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between w-full gap-y-5 md:flex-row md:items-end">
            <div className="flex flex-col items-center dark:text-gray-400 lg:flex-row gap-y-2 gap-x-2">
              <h1>Already have an Account?</h1>
              <h1
                onClick={handleRegistration}
                className="font-medium text-blue-700 cursor-pointer dark:text-yellow-400"
              >
                Log-in
              </h1>
            </div>
            <motion.div
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              className="flex flex-col w-full md:w-auto"
            >
              <button
                // onClick={() => setLoading(true)}
                className="bg-green-600 rounded text-white px-6 sm:py-2 py-1.5 hover:bg-green-700 transition-colors"
              >
                Register
              </button>
            </motion.div>
          </div>
        </form>
        {view && <Notifier data={formData} setView={setView} />}
      </motion.div>
    </div>
  );
};

export default UserRegister;
