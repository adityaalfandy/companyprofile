"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook that triggers scroll-based animations using IntersectionObserver.
 * Returns a ref to attach to the container element.
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Hook for animated counter (count from 0 to target).
 */
export function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const numTarget = parseFloat(String(target).replace(/[^0-9.]/g, ""));

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* easeOutExpo */
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(numTarget * eased));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(numTarget);
    };

    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { ref, count };
}
