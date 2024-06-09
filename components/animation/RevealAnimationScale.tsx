"use client";
import { ReactChildrenProps } from "@/types/Types";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";
export default function RevealAnimationScale({ children }: ReactChildrenProps) {
  const controls = useAnimation();
  const element = useRef(null);
  const inView = useInView(element, { once: true });
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.7 },
        visible: { opacity: 1, scale: 1 },
      }}
      ref={element}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 1,
        delay: 0.01,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
