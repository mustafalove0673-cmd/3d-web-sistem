'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextSplitProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export default function TextSplit({
  children,
  className = '',
  as: Tag = 'h2',
  delay = 0,
  stagger = 0.03,
  once = true,
}: TextSplitProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const words = children.split(' ');

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>} className={`${className} flex flex-wrap`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-flex overflow-hidden mr-[0.3em]">
          {word.split('').map((char, charIdx) => (
            <motion.span
              key={`${wordIdx}-${charIdx}`}
              className="inline-block"
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + wordIdx * stagger + charIdx * 0.015,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
