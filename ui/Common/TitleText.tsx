import { FC } from "react";
import { motion } from "framer-motion";

const TitleText: FC<{ text: string; styles?: string; delay?: number }> = ({
  text,
  styles,
  delay,
}) => {
  return (
    <div className={`overflow-hidden inline-block`}>
      <motion.h1
        initial={{ y: 100 }}
        animate={{
          y: 0,
          transition: {
            delay: delay,
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.75,
          },
        }}
        className={`inline-block text-5xl sm:text-7xl md:text-6xl xl:text-8xl font-medium ${styles}`}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default TitleText;
