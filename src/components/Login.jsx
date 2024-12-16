"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Spinner } from "react-activity";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import UserRegister from "./UserRegister";
import Notifier from "./Notifier";

export default function UserLogin() {
  const [value, setValue] = useState(0);
  const [direction, setDirection] = useState(1);
  const [error, setError] = useState(null);
  const [present, setPresent] = useState(false);
  const [Register, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [Notify, setNotifier] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistration = () => {
    setRegister(!Register);
  };

  const [Login, setData] = useState({
    email: "",
    password: "",
  });

  // Function to login user
  //   async function getUser(Login) {
  //     try {
  //       const { data } = await axiosInstance?.post(
  //         "hat-users/users/login/",
  //         Login
  //       );
  //       const { access } = data;
  //       try {
  //         // Save token in cookies
  //         Cookies.set("token", access, { expires: 1 }); // Token will expire in 15 days
  //         // Decode token to get user details
  //         const user = jwtDecode(access);
  //         // Redirect based on user type
  //         if (user.is_staff === true) {
  //           //   router.push("welcomepage");
  //         }
  //         if (user?.is_staff === false) {
  //           //   router.push("welcomepage");
  //         }
  //         setPresent(false);
  //       } catch (error) {
  //         console.error("Error saving token:", error);
  //       }
  //     } catch (ex) {
  //       setError(
  //         ex.response?.data?.detail ||
  //           "Server Error. Please contact our administrator for support."
  //       );
  //       setPresent(true);
  //     }
  //   }

  // Handle Login button click
  const handleLogin = () => {
    if (Login.email.length !== 0 && Login.password.length !== 0) {
      getUser(Login);
      setPresent(false);
      setLoading(true);
    } else {
      setError("Email and password fields cannot be empty.");
      setPresent(true);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Prevent form default submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-row overflow-y-hidden">
      {Register ? (
        <div className="flex dark:bg-gradient-to-t dark:from-transparent min-h-screen flex-1 flex-col relative justify-center px-6 py-12 lg:px-8">
          {Notify !== true ? (
            <UserRegister handleRegistration={handleRegistration} />
          ) : (
            <Notifier />
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
          className="flex bg-gradient-to-t dark:bg-gradient-to-t dark:from-transparent  via-transparent   min-h-screen flex-1 flex-col relative justify-center px-6 py-12 lg:px-8"
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <Image className="w-auto mx-auto h-14" src={logo} alt="Hat logo" /> */}

            {present !== true ? (
              <div className="mt-10">
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl dark:text-gray-300 font-Raleway md:text-3xl"
                >
                  Sign in
                </motion.h1>
              </div>
            ) : (
              ""
            )}
          </div>

          {present ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                ease: "easeOut",
                duration: 0.5,
              }}
              className={`mt-5 h-20 items-center justify-center flex `}
            >
              <div className="max-w-sm px-5 rounded-md bg-red-50 py-7 lg:px-3 ring-2 ring-red-700">
                <p className="font-bold text-red-600 ">{error}</p>
              </div>
            </motion.div>
          ) : loading ? (
            <div className={`mt-5 h-20 items-center justify-center flex `}>
              <Spinner color="#b67a3d" size={35} speed={1.8} animating={true} />
            </div>
          ) : (
            ""
          )}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 md:text-md dark:text-gray-400"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <motion.input
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    whileFocus={{ width: [0, "100%"] }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    id="email"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    required
                    autoComplete="email"
                    className="block px-1 w-full py-2 text-gray-900 border-b-2 border-green-600 outline-none bg-inherit placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 md:text-md dark:text-gray-400"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    onClick={() => setShow(false)}
                    className="text-sm font-semibold text-indigo-600 md:text-md hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative mt-2">
                  <motion.input
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    whileFocus={{
                      width: [0, "100%"],
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    id="password"
                    name="password"
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    className="block px-1 w-full py-2 text-gray-900 border-b-2 border-green-600 outline-none bg-inherit placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", ease: "easeOut" }}
                  onClick={handleLogin}
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </motion.button>
              </motion.div>
            </form>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-start justify-start w-full"
            >
              <p className="mt-5 text-sm font-bold text-center text-black dark:text-gray-300">
                Not a member
                <button
                  onClick={handleRegistration}
                  className="ml-2 font-semibold leading-6 text-indigo-600 dark:text-yellow-400 hover:text-indigo-500"
                >
                  Register
                </button>
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
