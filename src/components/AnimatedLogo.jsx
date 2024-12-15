"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 571.209 581.28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ width: "200px", height: "200px" }}
    >
      <defs>
        <style>
          {`
          .cls-1 {
            fill: #2bb673;
          }
          .cls-1, .cls-2, .cls-3 {
            stroke-width: 0px;
          }
          .cls-2 {
            fill: #00a651;
          }
          .cls-3 {
            fill: #009444;
          }
        `}
        </style>
      </defs>
      {/* Animating the first polygon */}

      <motion.polygon
        className="cls-2"
        points="279.68 453.75 251.16 503.15 250.75 502.92 250.75 502.91 213.31 448.28 75.94 247.81 76.16 247.66 138.46 247.66 241.94 398.68 279.68 453.75"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      />
      {/* Animating the second polygon */}
      <motion.polygon
        className="cls-3"
        points="541.66 0 441.13 174.12 421.28 208.49 279.68 453.75 241.94 398.68 377.66 163.6 396.15 131.58 472.11 0 541.66 0"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
      />
      {/* Animating the path */}
      <motion.path
        className="cls-1"
        d="M497.87,332.35c0,137.48-111.45,248.93-248.94,248.93S0,469.83,0,332.35,111.45,83.41,248.93,83.41c55.09,0,105.99,17.89,147.22,48.17l-18.49,32.02c-35.7-27.27-80.32-43.48-128.73-43.48-117.21,0-212.22,95.02-212.22,212.23s95.01,212.22,212.22,212.22,212.23-95.02,212.23-212.22c0-46.23-14.78-89-39.88-123.86l19.85-34.37c35.45,43.01,56.74,98.13,56.74,158.23Z"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1, rotate: 360 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
      />
    </motion.svg>
  );
};

export default AnimatedLogo;
// import React from "react";
// import { motion } from "framer-motion";

// const AnimatedLogo = () => {
//   return (
//     <motion.svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 571.209 581.28"
//       style={{ width: "200px", height: "200px" }}
//     >
//       <defs>
//         <style>
//           {`
//           .cls-1 {
//             fill: none;
//             stroke: #2bb673;
//             stroke-width: 4px;
//           }
//           .cls-2 {
//             fill: #00a651;
//           }
//           .cls-3 {
//             fill: #009444;
//           }
//         `}
//         </style>
//       </defs>
//       {/* Static Elements */}
//       <polygon
//         className="cls-2"
//         points="279.68 453.75 251.16 503.15 250.75 502.92 250.75 502.91 213.31 448.28 75.94 247.81 76.16 247.66 138.46 247.66 241.94 398.68 279.68 453.75"
//       />
//       <polygon
//         className="cls-3"
//         points="541.66 0 441.13 174.12 421.28 208.49 279.68 453.75 241.94 398.68 377.66 163.6 396.15 131.58 472.11 0 541.66 0"
//       />

//       {/* Animated Circle Path */}
//       <motion.path
//         className="cls-1"
//         d="M497.87,332.35c0,137.48-111.45,248.93-248.94,248.93S0,469.83,0,332.35,111.45,83.41,248.93,83.41c55.09,0,105.99,17.89,147.22,48.17l-18.49,32.02c-35.7-27.27-80.32-43.48-128.73-43.48-117.21,0-212.22,95.02-212.22,212.23s95.01,212.22,212.22,212.22,212.23-95.02,212.23-212.22c0-46.23-14.78-89-39.88-123.86l19.85-34.37c35.45,43.01,56.74,98.13,56.74,158.23Z"
//         initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
//         animate={{ strokeDasharray: 1400, strokeDashoffset: 0 }}
//         transition={{
//           duration: 2,
//           ease: "easeInOut",
//         }}
//       />
//     </motion.svg>
//   );
// };

// export default AnimatedLogo;
