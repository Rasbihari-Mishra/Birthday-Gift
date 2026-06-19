import {
  Box,
  Typography,
  Button
} from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AnimatedEnvelope from "../components/AnimatedEnvelope";
import AnimatedStars from "../components/AnimatedStars";
import FloatingHearts from "../components/FloatingHearts";
import MoonClouds from "../components/MoonClouds";
import HeartCursorTrail from "../components/HeartCursorTrail";
import SecretEnvelope from "../components/SecretEnvelope";
import MusicPlayer from "../components/MusicPlayer";
import { useNavigate } from "react-router-dom";
import PandaHug from "../components/PandaHug";
import NeonButton from "../components/NeonButton";
import ShootingStars from "../components/ShootingStars";
import ButterflyAnimation from "../components/ButterflyAnimation";
import CherryBlossom from "../components/CherryBlossom";
import Fireflies from "../components/Fireflies";
import MovingClouds from "../components/MovingClouds";

export default function IntroPage() {

  const navigate = useNavigate();

  return (
  <Box
    sx={{
      minHeight: "100vh",
      background:
        "linear-gradient(180deg,#091540,#3f0071,#ff1493)",
      overflow: "hidden",
      position: "relative"
    }}
  >
    {/* <AnimatedStars /> */}
    <Typography
        mt={4}
        variant="h3"
        color="white"
        textAlign="center"
        sx={{
          fontWeight: "bold",
          textShadow: "0px 0px 30px pink"
        }}
      >
        <TypeAnimation
          sequence={[
            "Hi Beautiful ❤️",
            2000,
            "Welcome To Your Magical World 🌸",
            2000,
            "Made Especially For You 🐼",
            2000,
            "A Surprise Created With Love 💕",
            2000
          ]}
          speed={50}
          repeat={Infinity}
        />
      </Typography>
    <AnimatedEnvelope />
    <ShootingStars />
    <ButterflyAnimation />
    <CherryBlossom />
    <MoonClouds />
    <Fireflies />
    <MovingClouds />
    <FloatingHearts />
    <HeartCursorTrail />
    <MusicPlayer />

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="100vh"
      position="relative"
      zIndex={10}
    >
      {/* <motion.img
        src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
        width={250}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      /> */}

      {/* <Typography
        mt={4}
        variant="h3"
        color="white"
        textAlign="center"
        sx={{
          fontWeight: "bold",
          textShadow: "0px 0px 30px pink"
        }}
      >
        <TypeAnimation
          sequence={[
            "Hi Beautiful ❤️",
            2000,
            "Welcome To Your Magical World 🌸",
            2000,
            "Made Especially For You 🐼",
            2000,
            "A Surprise Created With Love 💕",
            2000
          ]}
          speed={50}
          repeat={Infinity}
        />
      </Typography> */}

      {/* <Box mt={5}>
        <SecretEnvelope />
      </Box> */}

      {/* <Button
        variant="contained"
        onClick={() => navigate("/questions")}
        sx={{
          mt: 5,
          px: 5,
          py: 2,
          borderRadius: 10,
          fontSize: "20px",
          background:
            "linear-gradient(45deg,#ff69b4,#ff1493)",
          boxShadow:
            "0px 0px 40px hotpink",
          "&:hover": {
            boxShadow:
              "0px 0px 60px hotpink"
          }
        }}
      >
        Begin Your Surprise ❤️
      </Button> */}
    </Box>

    <Box
      sx={{
        position: "absolute",
        bottom: 20,
        left: 20,
        fontSize: 80
      }}
    >
      🧸
    </Box>

    <Box
      sx={{
        position: "absolute",
        bottom: 20,
        right: 20,
        fontSize: 80
      }}
    >
      🌹
    </Box>
  </Box>
);
}