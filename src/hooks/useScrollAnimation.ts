"use client"

import { useInView } from "react-intersection-observer"

export function useScrollAnimation() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })
  return { ref, inView }
}
