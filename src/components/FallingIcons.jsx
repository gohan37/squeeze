import { motion } from "framer-motion";

const icons = ["💎", "⚡", "🎁", "💥", "💡", "🔥", "🚀", "🌟"];

function FallingIcons() {
  const items = Array.from({ length: 15 }); // cantidad de íconos que caen

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((_, i) => {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        const left = Math.random() * 100; // posición horizontal
        const duration = 6 + Math.random() * 4; // velocidad de caída
        const delay = Math.random() * 5; // inicio aleatorio

        return (
          <motion.span
            key={i}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: "110vh", opacity: [0.8, 1, 0] }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
            className="absolute text-3xl select-none"
            style={{ left: `${left}%`, color: "white" }}
          >
            {icon}
          </motion.span>
        );
      })}
    </div>
  );
}

export default FallingIcons;
