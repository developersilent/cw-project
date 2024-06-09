"use client";
import { ReactChildrenProps } from "@/types/Types";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";
export default function RevealAnimationWithXFromRight({ children }: ReactChildrenProps) {
  const controls = useAnimation();
  const element = useRef(null);
  const inView = useInView(element, { once: true });
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0 },
      }}
      ref={element}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.8,
        delay: 0.01,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
