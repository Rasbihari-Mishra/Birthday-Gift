import { motion } from "framer-motion";

export default function ShootingStars() {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: -300,
            y: 50 + i * 120
          }}
          animate={{
            x: 1700,
            y: 400 + i * 50
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 4
          }}
          style={{
            position: "absolute",
            width: 200,
            height: 3,
            background:
              "linear-gradient(to right,white,transparent)",
            transform: "rotate(-25deg)"
          }}
        />
      ))}
    </>
  );
}