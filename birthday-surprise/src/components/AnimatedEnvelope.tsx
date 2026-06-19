import { useState } from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AnimatedEnvelope() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
  sx={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    textAlign: "center"
  }}
>
      {/* Envelope */}
      {!opened && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpened(true)}
          style={{
            cursor: "pointer",
            fontSize: "120px"
          }}
        >
          💌
        </motion.div>
      )}

      {!opened && (
        <Typography color="white" mt={2}>
          Click the envelope ❤️
        </Typography>
      )}

      {/* Letter */}
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{
              y: 200,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 1
            }}
          >
            <Card
              sx={{
                p: 4,
                maxWidth: 500,
                borderRadius: 5,
                background: "rgba(255,255,255,.12)",
                backdropFilter: "blur(20px)"
              }}
            >
              <Typography
                variant="h4"
                color="pink"
                textAlign="center"
              >
                My Dear Princess ❤️
              </Typography>

              <Typography mt={3} color="white">
                🌸 Thank you for making my world beautiful.
                <br /><br />

                🌷 Your smile brightens every day.<br />
                🌷 Your kindness melts hearts.<br />
                🌷 Your innocence is magical.<br />
                🌷 Your childlike nature makes life fun.<br />
                🌷 You are my favorite blessing ❤️
              </Typography>

              <Box mt={4} textAlign="center">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    px: 4,
                    boxShadow: "0 0 30px hotpink"
                  }}
                  onClick={() => navigate("/questions")}
                >
                  Continue Your Surprise ❤️
                </Button>
              </Box>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}