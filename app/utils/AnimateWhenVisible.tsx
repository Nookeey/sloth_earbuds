import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

enum Variant {
  Left = "left",
  Right = "right",
  Fade = "fade",
  SlideUp = "slideUp",
}

interface AnimateWhenVisibleProps {
  children: React.ReactNode;
  variant?: string;
  right?: boolean;
  delay?: number;
  className?: string;
}

const leftVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, x: -100 },
};

const rightVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, x: 100 },
};

const fadeVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0 },
};

const slideUpVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, y: 100 },
};

const AnimateWhenVisible = ({
  children,
  variant = Variant.Fade,
  delay = 0,
  className,
}: AnimateWhenVisibleProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    [Variant.Left]: leftVariants,
    [Variant.Right]: rightVariants,
    [Variant.Fade]: fadeVariants,
    [Variant.SlideUp]: slideUpVariants,
  }[variant];

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
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWhenVisible;
