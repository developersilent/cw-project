"use client"
import {motion, useInView, useAnimation} from "framer-motion"
import { useRef } from "react"

const va = {
   hidden: { opacity: 0, y: 20},
   visible: { opacity: 1 , y: 0}
}
export default function TextAnimation({text}: {text: string}) {
  const controls = useAnimation()
  const element = useRef(null)
  const Inview = useInView(element)
  if (Inview) {
    controls.start("visible")
  }
  return (
    <motion.p
      ref={element}
      variants={va}
      initial="hidden"
      animate={controls}
      transition={{ staggerChildren: 0.07, duration: 0.4, ease: "easeInOut" }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span key={word + "-" + index} variants={va}>
          {word + (index !== text.split(" ").length - 1 ? " " : "")}
        </motion.span>
      ))}
    </motion.p>
  );
}
