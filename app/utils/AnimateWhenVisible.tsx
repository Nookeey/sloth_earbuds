import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

interface AnimateWhenVisibleProps {
  children: React.ReactNode;
  variants: any;
  className?: string;
}

const AnimateWhenVisible = ({
  children,
  variants,
  className,
}: AnimateWhenVisibleProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWhenVisible;
