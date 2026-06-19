import { motion } from "framer-motion";

export default function AnimatedStars() {
  return (
    <>
      {[...Array(120)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1]
          }}
          transition={{
            duration: 1 + Math.random() * 3,
            repeat: Infinity
          }}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "white",
            boxShadow: "0 0 20px white"
          }}
        />
      ))}
    </>
  );
}