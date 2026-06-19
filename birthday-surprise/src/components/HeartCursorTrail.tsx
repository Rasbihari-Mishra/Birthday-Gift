import { useEffect } from "react";

export default function HeartCursorTrail() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const heart = document.createElement("div");

      heart.innerHTML = "❤️";

      heart.style.position = "fixed";
      heart.style.left = e.clientX + "px";
      heart.style.top = e.clientY + "px";
      heart.style.pointerEvents = "none";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 800);
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return null;
}