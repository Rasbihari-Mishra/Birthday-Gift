import {
  Box,
  Button,
  Typography,
  LinearProgress
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

const questions = [
  "Are you the cutest girl in the universe? ❤️",
  "Do you know you are incredibly beautiful? 🌸",
  "Do you know someone loves you a lot? 🥰",
  "Will you keep smiling forever? 😊",
  "Will you always stay this adorable? 🐼"
];

export default function QuestionsPage() {

  const [index, setIndex] = useState(0);
  const [yesSize, setYesSize] = useState(1);

  const navigate = useNavigate();

  const nextQuestion = () => {

    confetti();

    if (index === questions.length - 1) {
      navigate("/appreciation");
      return;
    }

    setIndex(index + 1);
    setYesSize(yesSize + 0.1);

  };

  const moveNoButton = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {

    const btn = e.currentTarget;

    btn.style.position = "absolute";
    btn.style.left =
      Math.random() * (window.innerWidth - 150) + "px";

    btn.style.top =
      Math.random() * (window.innerHeight - 100) + "px";

  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#7e22ce,#ff69b4)",
        color: "white",
        overflow: "hidden",
        position: "relative"
      }}
    >

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minHeight="100vh"
      >

        <Typography variant="h3">
          {questions[index]}
        </Typography>

        <Box
          mt={6}
          sx={{
            position: "relative",
            width: 500,
            height: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5
          }}
        >
          <motion.div
            animate={{
              scale: yesSize
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={nextQuestion}
              sx={{
                borderRadius: 10,
                minWidth: 140
              }}
            >
              YES ❤️
            </Button>
          </motion.div>

          <Button
            variant="outlined"
            onMouseEnter={moveNoButton}
            sx={{
              borderRadius: 10,
              minWidth: 140
            }}
          >
            NO 😜
          </Button>
        </Box>

        <Box width={400} mt={8}>
          <LinearProgress
            variant="determinate"
            value={
              ((index + 1) / questions.length) * 100
            }
          />
        </Box>

        <Typography mt={5} fontSize={80}>
          🐼🧸🌸
        </Typography>

      </Box>

    </Box>
  );
}