import React, { useEffect, useRef } from 'react';

/**
 * Interactive 3D Glowing Digital Orb / Neural Particle Canvas
 * Provides an elegant, futuristic visual without heavy 3D library overhead.
 * Responds smoothly to mouse movements with subtle inertia.
 */
export default function CanvasVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create 3D spherical particle points
    const POINT_COUNT = 140;
    const RADIUS = Math.min(width, height) * 0.38;
    const points = [];

    for (let i = 0; i < POINT_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / POINT_COUNT);
      const theta = Math.sqrt(POINT_COUNT * Math.PI) * phi;

      points.push({
        x: RADIUS * Math.cos(theta) * Math.sin(phi),
        y: RADIUS * Math.sin(theta) * Math.sin(phi),
        z: RADIUS * Math.cos(phi),
        baseX: RADIUS * Math.cos(theta) * Math.sin(phi),
        baseY: RADIUS * Math.sin(theta) * Math.sin(phi),
        baseZ: RADIUS * Math.cos(phi),
        size: 1.5 + Math.random() * 1.5,
        color: Math.random() > 0.4 ? '#8b5cf6' : '#06b6d4',
      });
    }

    // Mouse tracking with inertia
    let targetRotX = 0.002;
    let targetRotY = 0.003;
    let rotX = 0.002;
    let rotY = 0.003;
    let currentAngleX = 0;
    let currentAngleY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / width - 0.5;
      const ny = (e.clientY - rect.top) / height - 0.5;
      targetRotY = nx * 0.03;
      targetRotX = -ny * 0.03;
    };

    const handleMouseLeave = () => {
      targetRotX = 0.002;
      targetRotY = 0.003;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Smooth interpolation towards mouse rotation
      if (!prefersReducedMotion) {
        rotX += (targetRotX - rotX) * 0.06;
        rotY += (targetRotY - rotY) * 0.06;
        currentAngleX += rotX;
        currentAngleY += rotY;
      }

      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);
      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);

      // Render glowing aura in center
      const auraGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        RADIUS * 0.05,
        centerX,
        centerY,
        RADIUS * 1.15
      );
      auraGradient.addColorStop(0, 'rgba(139, 92, 246, 0.28)');
      auraGradient.addColorStop(0.4, 'rgba(6, 182, 212, 0.12)');
      auraGradient.addColorStop(0.8, 'rgba(139, 92, 246, 0.04)');
      auraGradient.addColorStop(1, 'rgba(8, 7, 13, 0)');

      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, RADIUS * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // Project 3D points to 2D
      const projectedPoints = [];
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate around Y axis
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        // Rotate around X axis
        let y2 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        // Perspective projection
        const focalLength = RADIUS * 2.2;
        const scale = focalLength / (focalLength + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;
        const alpha = Math.max(0.12, Math.min(1, (z2 + RADIUS) / (2 * RADIUS)));

        projectedPoints.push({
          x: px,
          y: py,
          z: z2,
          scale,
          alpha,
          color: p.color,
          size: p.size * scale,
        });
      }

      // Sort points by depth (back to front)
      projectedPoints.sort((a, b) => a.z - b.z);

      // Draw subtle connecting lines between close points
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        if (p1.alpha < 0.25) continue;

        let connections = 0;
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p2 = projectedPoints[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 46 && connections < 3) {
            connections++;
            const lineAlpha = (1 - dist / 46) * Math.min(p1.alpha, p2.alpha) * 0.45;
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        ctx.fillStyle =
          p.color === '#8b5cf6'
            ? `rgba(168, 85, 247, ${p.alpha})`
            : `rgba(56, 189, 248, ${p.alpha})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.size), 0, Math.PI * 2);
        ctx.fill();

        // Extra highlight on front particles
        if (p.alpha > 0.75) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Outer delicate orbital ring
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.16)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, RADIUS * 1.05, RADIUS * 0.35, currentAngleY * 0.4, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Digital Sphere"
      />
      {/* Subtle overlay badge */}
      <div className="absolute bottom-2 right-4 text-[11px] font-mono text-purple-300/60 bg-black/40 px-3 py-1 rounded-full border border-purple-500/20 backdrop-blur-md pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        Interactive 3D Matrix
      </div>
    </div>
  );
}
