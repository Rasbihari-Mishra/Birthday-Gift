import { motion } from "framer-motion";

export default function ButterflyAnimation() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -80, 80, 0]
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity
          }}
          style={{
            position: "absolute",
            left: `${10 + i * 10}%`,
            top: "70%",
            fontSize: 30,
            zIndex: 5
          }}
        >
          🦋
        </motion.div>
      ))}
    </>
  );
}