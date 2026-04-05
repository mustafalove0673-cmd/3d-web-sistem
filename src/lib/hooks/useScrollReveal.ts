'use client';

import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('[data-reveal]');
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseFloat(el.dataset.revealDelay || '0');
            const direction = el.dataset.revealDirection || 'up';

            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translate(0, 0)';

              if (el.dataset.revealCounter) {
                animateCounter(el, el.dataset.revealCounter);
              }
            }, delay * 1000);

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => {
      const direction = (el as HTMLElement).dataset.revealDirection || 'up';
      (el as HTMLElement).style.opacity = '0';

      switch (direction) {
        case 'up':
          (el as HTMLElement).style.transform = 'translateY(40px)';
          break;
        case 'down':
          (el as HTMLElement).style.transform = 'translateY(-40px)';
          break;
        case 'left':
          (el as HTMLElement).style.transform = 'translateX(40px)';
          break;
        case 'right':
          (el as HTMLElement).style.transform = 'translateX(-40px)';
          break;
        case 'scale':
          (el as HTMLElement).style.transform = 'scale(0.9)';
          break;
      }

      (el as HTMLElement).style.transition = 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

function animateCounter(el: HTMLElement, target: string) {
  const numMatch = target.match(/[\d.]+/);
  if (!numMatch) return;
  const targetNum = parseFloat(numMatch[0]);
  const duration = 2000;
  const start = performance.now();

  function update(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = targetNum * eased;

    if (target.includes('+')) {
      el.textContent = Math.floor(current) + '+';
    } else {
      el.textContent = Math.floor(current).toString();
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
