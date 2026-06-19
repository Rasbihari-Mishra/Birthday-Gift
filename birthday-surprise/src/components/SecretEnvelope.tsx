import {
  Dialog,
  DialogContent,
  Typography,
  Card,
  Button,
  Box
} from "@mui/material";
import { useState } from "react";

export default function SecretEnvelope() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        sx={{
          p: 3,
          cursor: "pointer",
          background: "rgba(255,255,255,.1)",
          color: "white"
        }}
      >
        💌 Open Secret Message
      </Card>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogContent>

          <Typography variant="h5">
            My Dear Princess ❤️
          </Typography>

          <Typography mt={3}>
            Thank you for making life beautiful.
            <br /><br />
            🌸 Your smile<br />
            🌸 Your kindness<br />
            🌸 Your innocence<br />
            🌸 Your childness<br />
            <br />
            Everything about you is magical 🐼❤️
          </Typography>

          <Box mt={3}>
            <Button
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Close ❤️
            </Button>
          </Box>

        </DialogContent>
      </Dialog>
    </>
  );
}