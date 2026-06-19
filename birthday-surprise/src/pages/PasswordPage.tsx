import {
  Box,
  Typography,
  TextField,
  Button,
  Card
} from "@mui/material";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle
} from "@mui/material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "../components/FloatingHearts";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [openHint, setOpenHint] = useState(false);

  const navigate = useNavigate();

  const handleUnlock = () => {
    if (password === "gudiya") {
      navigate("/intro");
    } else {
      alert("Wrong password 😜");
    }
  };

  return (
    <>
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b,#7e22ce)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <FloatingHearts />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Card
          sx={{
            p: 5,
            width: 400,
            backdropFilter: "blur(20px)",
            background: "rgba(255,255,255,.1)",
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,.2)"
          }}
        >
          <Typography
            variant="h3"
            color="white"
            textAlign="center"
          >
            Welcome Anii ❤️
          </Typography>

          {/* <Typography
            mt={3}
            color="pink"
            textAlign="center"
          >
            Hint 💕
          </Typography>

          <Typography color="white" textAlign="center">
            The date when our story became special 🌸
          </Typography> */}

          <TextField
            fullWidth
            sx={{ mt: 4 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <Button
  variant="outlined"
  sx={{
    mt: 2,
    borderRadius: 5,
    color: "white",
    borderColor: "pink",
    "&:hover": {
      borderColor: "hotpink",
      backgroundColor: "rgba(255,105,180,.15)"
    }
  }}
  onClick={() => setOpenHint(true)}
>
  Need a Hint? 🤔
</Button>

          <Button
            fullWidth
            sx={{
              mt: 3,
              height: 55,
              borderRadius: 4
            }}
            variant="contained"
            onClick={handleUnlock}
          >
            Unlock My Heart ❤️
          </Button>
        </Card>
      </motion.div>
    </Box>
    <Dialog
  open={openHint}
  onClose={() => setOpenHint(false)}
>
  <DialogTitle>
    💡 Hint
  </DialogTitle>

  <DialogContent>

    <Typography>
      🐼 Think about what I lovingly call you ❤️
    </Typography>

  </DialogContent>
</Dialog>
</>
  );
}