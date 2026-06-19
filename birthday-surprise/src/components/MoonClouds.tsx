import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function MoonClouds() {
  return (
    <>
      {/* Moon */}
      <Box
        sx={{
          position: "absolute",
          right: 80,
          top: 60,
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: "#FFF8DC",
          boxShadow: "0 0 100px white",
          zIndex: 1
        }}
      />

      {/* Cloud 1 */}
      <motion.div
        animate={{
          x: [-300, 1800]
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: "absolute",
          top: 90,
          zIndex: 2
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 90,
            background: "rgba(255,255,255,.25)",
            borderRadius: "100px",
            filter: "blur(8px)"
          }}
        />
      </motion.div>

      {/* Cloud 2 */}
      <motion.div
        animate={{
          x: [1600, -400]
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: "absolute",
          top: 180,
          zIndex: 1
        }}
      >
        <Box
          sx={{
            width: 220,
            height: 70,
            background: "rgba(255,255,255,.2)",
            borderRadius: "100px",
            filter: "blur(8px)"
          }}
        />
      </motion.div>
    </>
  );
}