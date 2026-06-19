import {
  Box,
  Typography,
  Button,
  Card,
  CardContent
} from "@mui/material";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { TypeAnimation } from "react-type-animation";

export default function FinalPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        background:
          "linear-gradient(180deg,#091540,#7e22ce,#ff1493)"
      }}
    >
      <Confetti recycle />

      {/* Balloons */}
      <motion.div
        animate={{
          y: [800, -200]
        }}
        transition={{
          duration: 15,
          repeat: Infinity
        }}
        style={{
          position: "absolute",
          left: "10%",
          fontSize: 80
        }}
      >
        🎈
      </motion.div>

      <motion.div
        animate={{
          y: [900, -300]
        }}
        transition={{
          duration: 18,
          repeat: Infinity
        }}
        style={{
          position: "absolute",
          right: "10%",
          fontSize: 80
        }}
      >
        🎈
      </motion.div>

      <Box
        sx={{
            minHeight: "100vh",
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2
        }}
        >
        <motion.div
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <Typography fontSize={120}>
            🎂
          </Typography>
        </motion.div>

        <Typography
          variant="h2"
          color="white"
          textAlign="center"
          sx={{
            textShadow: "0px 0px 40px hotpink"
          }}
        >
          Happy Birthday Anii ❤️
        </Typography>

        <Typography
          mt={4}
          variant="h5"
          color="white"
          textAlign="center"
        >
          <TypeAnimation
            sequence={[
              "May your smile always shine ✨",
              3000,
              "May all your dreams come true 🌸",
              3000,
              "Thank you for making life beautiful ❤️",
              3000,
              "You are my favorite blessing 🐼💕",
              3000
            ]}
            repeat={Infinity}
          />
        </Typography>

        <Card
          sx={{
            mt: 6,
            width: 700,
            maxWidth: "90%",
            borderRadius: 8,
            background: "rgba(255,255,255,.15)",
            backdropFilter: "blur(20px)",
            color: "white",
            boxShadow: "0px 0px 40px hotpink"
          }}
        >
          <CardContent>

            <Typography variant="h4" textAlign="center">
              💌 A Letter From My Heart
            </Typography>

            <Typography
              mt={4}
              sx={{
                lineHeight: 2,
                fontSize: 18
              }}
            >
              My Dear Gudiya ❤️

              <br /><br />

              Tu meri zindagi ka woh hissa hai, jiske bina har khushi adhoori lagti hai.

              <br /><br />

              Teri muskaan sukoon deti hai, teri baatein himmat deti hain, aur tera saath meri duniya ko khoobsurat bana deta hai.
              <br /><br />
              Shayad main har roz na keh paun, lekin tu meri zindagi ki sabse pyari aur sabse keemti cheez hai.
              <br /><br />

              No matter how many birthdays come,
              I wish to always see you smiling,
              laughing and shining.

              <br /><br />

              Happy Birthday Anii ❤️

              <br /><br />

              Forever cheering for your happiness 🌹
            </Typography>

          </CardContent>
        </Card>

        <Typography
          mt={6}
          fontSize={90}
        >
          🐼🧸🌹✨🎁💕
        </Typography>

      </Box>
    </Box>
  );
}