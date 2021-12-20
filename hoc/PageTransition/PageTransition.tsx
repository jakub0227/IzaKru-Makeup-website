import React, { FC } from "react";
import { motion, Transition } from "framer-motion";
import { useRouter } from "next/dist/client/router";

export const PageTransition: FC = (props) => {
  const router = useRouter();

  const spring: Transition = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren",
  };
  return (
    <motion.div
      key={router.route}
      transition={spring}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      {props.children}
    </motion.div>
  );
};
