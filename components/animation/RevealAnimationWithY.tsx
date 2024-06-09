"use client";
import { ReactChildrenProps } from "@/types/Types";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";
export default function RevealAnimationWithY({ children }: ReactChildrenProps) {
  const controls = useAnimation();
  const element = useRef(null);
  const inView = useInView(element);
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      ref={element}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
    >
      {children}
    </motion.div>
  );
}
