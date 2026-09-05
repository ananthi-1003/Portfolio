import React, { useEffect, useState } from 'react';

/**
 * Minimal Desktop Custom Cursor
 * Subtle dot + trailing expansion ring.
 * Automatically disabled on touch screens and mobile devices.
 */
export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768
    );
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth trailing animation using lerp in requestAnimationFrame
    let rafId;
    let currentX = -100;
    let currentY = -100;

    const updateTrailing = () => {
      currentX += (pos.x - currentX) * 0.22;
      currentY += (pos.y - currentY) * 0.22;
      setTrailingPos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(updateTrailing);
    };

    rafId = requestAnimationFrame(updateTrailing);

    // Interactive element listeners
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a, button, input, textarea, select, [data-interactive="true"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [pos.x, pos.y, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Primary sharp center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
        }}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full bg-purple-400 transition-all duration-150 ${
            isHovered ? 'scale-150 bg-cyan-300 shadow-[0_0_8px_#38bdf8]' : 'shadow-[0_0_6px_#c084fc]'
          }`}
        />
      </div>

      {/* Trailing soft ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x - 16}px, ${trailingPos.y - 16}px, 0)`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border transition-all duration-200 ease-out flex items-center justify-center ${
            isHovered
              ? 'scale-150 border-cyan-400/60 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
              : 'border-purple-500/30 bg-purple-500/5'
          }`}
        />
      </div>
    </>
  );
}
