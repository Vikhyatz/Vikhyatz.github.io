'use client';
import { cn } from '../lib/utils/cn';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';
import { useRef, useEffect } from 'react';

// rough notation
import { annotate } from "rough-notation";

export function LettersPullUp({
  text,
  className = '',
}) {

  // rough notation configuration
  useEffect(() => {
    if (ref.current) {
      const annotation = annotate(ref.current, {
        type: "box",
        color: "black",
        animationDuration: 2000,
        iterations: 2,
        padding: 7,
        strokeWidth: 1.4,
        roughness: 8,
      });

      annotation.show();
    }
  }, []);



  const splittedText = text.split('');

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center" ref={ref}>
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={cn(
            'text-7xl text-[#9f9f9f] mb-2 drop-shadow-lg max-md:text-4xl ',
            className
          )}
        >
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}