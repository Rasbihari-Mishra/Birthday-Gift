import { useRef, useState } from "react";
import { Fab } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PauseIcon from "@mui/icons-material/Pause";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
      >
        <source src="/music/Romantic.mp3" type="audio/mpeg" />
      </audio>

      <Fab
        color="secondary"
        onClick={toggleMusic}
        sx={{
          position: "fixed",
          right: 30,
          bottom: 30,
          zIndex: 9999
        }}
      >
        {playing ? <PauseIcon /> : <MusicNoteIcon />}
      </Fab>
    </>
  );
}