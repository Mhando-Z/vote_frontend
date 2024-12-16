"use client";

import React, { useState } from "react";
import { Spinner } from "react-activity";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { CheckCircle, Mail, User, RefreshCw } from "lucide-react";

const MotionCheckCircle = motion(CheckCircle);

const NotificationModal = ({ data, setView }) => {
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

const DetailRow = ({ label, value }) => (
  <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
    <div className="flex items-center space-x-2">
      <User className="text-gray-500" />
      <span className="font-medium text-gray-700">{label}</span>
    </div>
    <span className="text-gray-800">{value}</span>
  </div>
);

const Notifier = () => {
  const { sessy } = useContext(UserContext);
  const [view, setView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    const formData = {
      email: sessy?.email,
      username: sessy?.name,
      password: sessy?.passkey,
      password2: sessy?.passkey,
    };

    setLoading(true);
    setError(null);

    try {
      await axiosInstance.post("/hat-users/register/", formData);
      setView(true);
    } catch (error) {
      toast.error("User registration failed.");
      setError(error.response?.data || "Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!view ? (
        <div className="flex flex-col">
          <h1>Hello {sessy?.name}</h1>
          <p>
            Your email {sessy?.email} is not yet registered. Kindly press the
            register button below to create your account.
          </p>
          <button
            onClick={handleRegister}
            className="px-5 py-1.5 mt-2 bg-blue-600 text-white rounded-md"
            disabled={loading}
          >
            {loading ? (
              <Spinner color="white" size={15} speed={3} animating={true} />
            ) : (
              "Register"
            )}
          </button>
        </div>
      ) : (
        <NotificationModal data={sessy} setView={setView} />
      )}
    </div>
  );
};

export default Notifier;
