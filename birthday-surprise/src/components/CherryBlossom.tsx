import { motion } from "framer-motion";

export default function CherryBlossom() {
  return (
    <>
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -100,
            x: Math.random() * window.innerWidth
          }}
          animate={{
            y: window.innerHeight + 200,
            rotate: 360
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: i * .4
          }}
          style={{
            position: "absolute",
            fontSize: 24
          }}
        >
          🌸
        </motion.div>
      ))}
    </>
  );
}