"use client";

import React, { useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "react-activity";
// icons imports
import { GiVote } from "react-icons/gi";
import { BsClipboardDataFill } from "react-icons/bs";
import { VscServerProcess } from "react-icons/vsc";
import UserLogin from "@/components/Login";

const selection = [
  {
    id: 1,
    title: "I am here to Vote",
    icon: <GiVote />,
    path: "",
    content: (
      <div className="flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold mb-4">Voting Section</h2>
        <p>Proceed to cast your vote securely and conveniently.</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "I am here for results",
    icon: <BsClipboardDataFill />,
    path: "",
    content: (
      <div className="flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold mb-4">Election Results</h2>
        <p>View the latest election results and analytics.</p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Election processes",
    icon: <VscServerProcess />,
    path: "",
    content: <UserLogin />,
  },
];

function Home() {
  const router = useRouter();
  const [selectId, setId] = useState(null);
  const [showRow, setShowRow] = useState(false);

  const handleSelect = (id) => {
    setId(id);
    setShowRow(true);
  };

  // Variants for slide animation
  const containerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50 justify-center overflow-hidden">
      <div className="flex flex-row w-full items-center">
        <div className="w-full p-6">
          <div className="flex gap-y-4 flex-col items-center">
            <AnimatedLogo />
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ delay: 2, duration: 0.7 }}
              className="text-3xl md:text-4xl font-medium font-roboto"
            >
              Online Voting System
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ delay: 2.5, duration: 0.7 }}
              className=""
            >
              Lets make it fair and square
            </motion.p>
          </div>

          {/* choice selection */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="flex flex-col mx-auto container items-center mt-5"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
              {selection?.map((dt, index) => (
                <motion.div
                  onClick={() => handleSelect(dt.id)}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{ delay: 1 * index, duration: 0.7 }}
                  key={index}
                  className={`sm:py-5 ${
                    selectId === dt?.id
                      ? "text-white font-bold bg-green-600 shadow-md"
                      : " bg-white/65"
                  } relative p-1 shadow-md backdrop-blur-sm sm:p-5 items-center ring-1 ring-green-300 rounded cursor-pointer flex flex-col gap-3`}
                >
                  <div className="sm:flex hidden text-2xl">{dt?.icon}</div>
                  <h1 className="text-center">{dt?.title}</h1>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated content section */}
        <AnimatePresence>
          {showRow && selectId && (
            <motion.div
              key="selected-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full border-l border-green-300"
            >
              {selection.find((item) => item.id === selectId)?.content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Home;
