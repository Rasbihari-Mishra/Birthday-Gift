import { motion } from "framer-motion";
import { Box } from "@mui/material";

export default function MovingClouds() {
  return (
    <>
      <motion.div
        animate={{ x: [-400, 1800] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: "absolute",
          top: 80,
          zIndex: 1
        }}
      >
        <Box
          sx={{
            width: 250,
            height: 80,
            bgcolor: "rgba(255,255,255,0.4)",
            borderRadius: "50px",
            filter: "blur(8px)",
            position: "relative"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 100,
              height: 100,
              bgcolor: "rgba(255,255,255,0.4)",
              borderRadius: "50%",
              top: -40,
              left: 30
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: 120,
              height: 120,
              bgcolor: "rgba(255,255,255,0.4)",
              borderRadius: "50%",
              top: -50,
              right: 30
            }}
          />
        </Box>
      </motion.div>
    </>
  );
}