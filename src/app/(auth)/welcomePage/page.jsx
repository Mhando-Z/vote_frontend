"use client";

import React, { useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Spinner } from "react-activity";

function WelcomePage() {
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
      <div className="flex flex-col  w-full items-center">
        <div className="w-full p-6">
          <div className="flex gap-y-4 flex-col items-center">
            <AnimatedLogo />
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ delay: 2, duration: 0.7 }}
              className="text-3xl md:text-4xl font-medium font-roboto"
            >
              Online Voting System
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ delay: 2.5, duration: 0.7 }}
              className=""
            >
              Lets make it fair and square
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
