import { motion } from "framer-motion";
import React, { FC } from "react";

interface AnimatedHeadingProps {
  children: React.ReactNode;
}

export const AnimatedHeading: FC<AnimatedHeadingProps> = (props) => {
  const { children } = props;

  const childrenVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 100,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        mass: 1.5,
        stiffness: 200,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={childrenVariants}
      >
        {children}
      </motion.div>
    </>
  );
};
