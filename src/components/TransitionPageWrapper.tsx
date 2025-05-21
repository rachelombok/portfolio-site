"use client";
import { motion } from "framer-motion";
const TransitionPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionPageWrapper;
