'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    dotX.set(e.clientX);
    dotY.set(e.clientY);
    if (!visible) setVisible(true);
  }, [cursorX, cursorY, dotX, dotY, visible]);

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Detect hoverable elements
    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll(
        'a, button, [data-cursor-hover], input, textarea, select, .cursor-pointer'
      );
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [isMobile, handleMouseMove]);

  if (isMobile) return null;

  return (
    <>
      {/* Ring cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          className="rounded-full border border-cream/40"
          animate={{
            width: hovered ? 56 : clicked ? 28 : 36,
            height: hovered ? 56 : clicked ? 28 : 36,
            borderColor: hovered ? 'rgba(200, 80, 111, 0.6)' : 'rgba(245, 230, 211, 0.4)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            x: '-50%',
            y: '-50%',
          }}
        />
      </motion.div>

      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="rounded-full bg-cream/80"
          animate={{
            width: clicked ? 4 : hovered ? 6 : 8,
            height: clicked ? 4 : hovered ? 6 : 8,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          style={{
            x: '-50%',
            y: '-50%',
          }}
        />
      </motion.div>
    </>
  );
}
