import { PropsWithChildren } from "react";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  height: number | "auto";
  className?: string;
}

const AnimateHeight = ({ children, height, className }: PropsWithChildren<Props>) => {
  return (
    <AnimatePresence>
      <motion.div
        className={className}
        initial={{ height: height }}
        animate={{ height: height }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateHeight;
