"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type UseInViewOptions = number | { threshold?: number };

/** Returns true when `ref` element enters the viewport */
export function useInView(options: UseInViewOptions = 0.15) {
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);
  const threshold = typeof options === "number" ? options : options?.threshold ?? 0.15;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Returns true when user prefers reduced motion */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/** Animated counter that counts up to `end` when element enters viewport */
export function useAnimatedCounter(end: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.3);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setCount(end);
      return;
    }

    let startTime: number;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, end, duration, reduced]);

  return { ref, count };
}

/** Smooth scroll to section */
export function useScrollTo() {
  return useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
}
