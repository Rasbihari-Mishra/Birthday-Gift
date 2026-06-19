import { Fab } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export default function MusicPlayer() {

  return (
    <Fab
      color="secondary"
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30
      }}
    >
      <MusicNoteIcon />
    </Fab>
  );

}