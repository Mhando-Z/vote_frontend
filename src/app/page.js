"use client";

import React, { useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { Spinner } from "react-activity";

const selection = [
  {
    title: "I am here to Vote",
    icon: "",
    path: "",
  },
  {
    title: "I am here for results",
    icon: "",
    path: "",
  },
  {
    title: "Election processes",
    icon: "",
    path: "",
  },
];

function Home() {
  const router = useRouter();
  const [present, setPresent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      setError("Both email and password are required.");
      setPresent(true);
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) {
        setError(error.message);
        setPresent(true);
      } else {
        const { session } = data;
        localStorage.setItem("token", session.access_token);
        router.push("/home/home");
        setPresent(false);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setPresent(true);
    } finally {
      setLoading(false);
    }
  };

  // button clicks logics
  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50  justify-center">
      <div className="flex gap-y-4 flex-col items-center">
        <AnimatedLogo />
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-3xl md:text-4xl font-medium font-roboto"
        >
          Online Voting System
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className=""
        >
          Lets make it fair and square
        </motion.p>
      </div>
      {/* choice selection */}
      <div className="flex flex-col mx-auto container items-center mt-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
          {selection?.map((dt, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.7 }}
                key={index}
                className="md:p-10 p-1 sm:p-5  bg-white ring-1 ring-green-300 rounded cursor-pointer flex flex-col gap-3"
              >
                <h1 className="text-center">{dt?.title}</h1>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* login section */}
      <div className="flex md:w-[700px] px-2 w-full flex-col gap-4 mt-10">
        <div className="">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="font-Raleway text-2xl md:text-3xl"
          >
            Sign in
          </motion.h1>
        </div>
        {/* login form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <label
              htmlFor="email"
              className="block text-sm md:text-md font-medium leading-6 text-gray-900 dark:text-gray-400"
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
                onChange={handleInputChange}
                type="email"
                required
                autoComplete="email"
                className="block w-full px-3 py-2 text-gray-900 border-b-2 border-green-600  bg-inherit  outline-none  placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm md:text-md font-medium leading-6 text-gray-900 dark:text-gray-400"
              >
                Password
              </label>
              <Link
                href="#"
                onClick={() => setShow(false)}
                className="text-sm md:text-md font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative mt-2">
              <motion.input
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                whileFocus={{ width: [0, "100%"] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                id="password"
                name="password"
                onChange={handleInputChange}
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                className="block w-full px-3 py-2 text-gray-900 border-b-2 border-green-600  bg-inherit  outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6"
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
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ delay: 2, duration: 0.7 }}
            className="md:flex md:justify-end w-full md:items-end"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", ease: "easeOut" }}
              type="submit"
              className="flex rounded-md w-full md:w-[100px] justify-center bg-green-600 px-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700  focus:ring-offset-2 "
            >
              {loading ? (
                <div className="flex items-center  justify-center cursor-not-allowed">
                  <Spinner color="white" size={17} speed={3} animating={true} />
                </div>
              ) : (
                <span className="relative z-10">Sign in</span>
              )}
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

export default Home;
