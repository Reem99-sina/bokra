import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";

const ScrollAnimationExample = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: 100 }} className="w-full">
      {children}
    </motion.div>
  );
};

export default ScrollAnimationExample;
