import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    emoji: "👀",
    title: "Your Eyes",
    shayari:
      "Teri aankhein samandar si gehri hain,\nJinmein doob jaane ka mann karta hai. \nHar baar jab nazar milti hai tujhse, \nBas tujhse hi mohabbat karne ka mann karta hai. ❤️"
  },

  {
    emoji: "😊",
    title: "Your Smile",
    shayari:
      "Tum phoolon ki tarah nazuk,\nhawaon se jyada pyari ho, \nMeri hr khusi se bhadkar, \ntumhari zimmedari h, \nM likhu bhi to kaise tumhari, \ntareef k kisse, \nMeri hr gazal se khoobsurat, \ntumhari ek muskaan kaafi h 🌸"
  },

  {
    emoji: "💋",
    title: "Your Lips",
    shayari:
      "Tere honton ki muskurahat mein ek alag hi baat hai,\nJaise har khushi ki shuruaat tere saath hai. \nBas ek muskaan teri mil jaaye agar, \nLagta hai jaise poori kaynaat mere paas hai. ❤️"
  },

  {
    emoji: "👃",
    title: "Your Nose",
    shayari:
      "Tumhari har ada pyari hai,\nAur tumhari masoomiyat sabse nyari hai 🥰"
  },

  {
    emoji: "❤️",
    title: "Your Kindness",
    shayari:
      "Teri naram si baatein aur dil ki safai,\nHar dard ko sukoon dene ki taaqat laayi. \nRab ne fursat se likhi hogi teri fitrat, \nTabhi to teri har ada mein mohabbat samayi. 🌹"
  },

  {
    emoji: "🐼",
    title: "Your Character",
    shayari:
      "Teri pehchaan sirf teri muskaan nahi,\nTera kirdaar hai jo tujhe khaas banata hai. \nKhoobsurat chehre bahut dekhe hain maine, \nPar itna khoobsurat dil kam hi nazar aata hai. ❤️"
  }
];

export default function AppreciationPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#091540,#3f0071,#ff1493)",
        p: 5,
        mb: 12
      }}
    >
      <Typography
        variant="h3"
        color="white"
        textAlign="center"
        mb={6}
      >
        🌹 Things I Love About You 🌹
      </Typography>

      <Grid container spacing={4}>
        {cards.map((card, index) => (
          <Grid size={{xs:12, md:4}} key={index}>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 8
              }}
            >
              <Card
                sx={{
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(25px)",
                  color: "white",
                  minHeight: 380,
                  p: 2,
                  boxShadow: "0px 0px 40px rgba(255,105,180,.6)",
                  transition: "all .4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 0px 60px hotpink"
                  }
                }}
              >
                <CardContent>

                  <Typography
                    sx={{
                      fontSize: "70px",
                      textAlign: "center",
                      lineHeight: 1.2
                    }}
                  >
                    {card.emoji}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      mt: 2,
                      mb: 3
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      textAlign: "center",
                      whiteSpace: "pre-line",
                      fontStyle: "italic",
                      lineHeight: 2,
                      fontSize: "18px",
                      color: "#fff0f5"
                    }}
                  >
                    {card.shayari}
                  </Typography>

                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box
        textAlign="center"
        mt={8}
      >
        <Typography
          fontSize={80}
        >
          🐼🧸🌹✨
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 4,
            borderRadius: 10,
            px: 5,
            boxShadow: "0 0 40px hotpink"
          }}
          onClick={() => navigate("/final")}
        >
          One Last Surprise ❤️
        </Button>
      </Box>
    </Box>
  );
}