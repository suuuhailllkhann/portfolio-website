"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; r: number; phase: number; drift: number; shade: number; alpha: number; moves: boolean };

function seeded(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

export function HeroVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, width = 0, height = 0, points: Point[] = [];

    const buildField = () => {
      const count = width < 620 ? 300 : 1280;
      points = Array.from({ length: count }, (_, index) => {
        const progress = seeded(index, 1);
        const x = width * (.015 + progress * .97);
        const primary = height * (.7 - progress * .42 + Math.sin(progress * 8.7) * .09);
        const secondary = height * (.47 + Math.cos(progress * 11.5) * .14);
        const blend = seeded(index, 2) > .7 ? secondary : primary;
        const spread = height * (.34 - progress * .17);
        const clusterPull = progress > .48 ? Math.sin(progress * 22) * height * .035 : 0;
        return {
          x, y: blend + (seeded(index, 3) - .5) * spread + clusterPull,
          r: .52 + seeded(index, 4) * 1.62,
          phase: seeded(index, 5) * Math.PI * 2,
          drift: .7 + seeded(index, 6) * 2.6,
          shade: Math.round(190 - progress * 180),
          alpha: .4 + seeded(index, 7) * .52,
          moves: index % 5 === 0,
        };
      });
    };
    const resize = () => {
      const box = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = box.width; height = box.height;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0); buildField();
    };
    const curve = (offset: number, alpha: number, time: number) => {
      const pulse = motion.matches ? 0 : Math.sin(time * .0001 + offset) * height * .009;
      context.beginPath(); context.moveTo(width * -.05, height * (.7 + offset * .012));
      context.bezierCurveTo(width * .15, height * (.52 + offset * .022), width * .27, height * (.76 - offset * .017) + pulse, width * .48, height * (.55 + offset * .014));
      context.bezierCurveTo(width * .67, height * (.39 - offset * .013), width * .76, height * (.62 + offset * .018) - pulse, width * 1.04, height * (.19 + offset * .012));
      context.strokeStyle = `rgba(22,22,22,${alpha})`; context.stroke();
    };
    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      context.lineWidth = .7;
      for (let line = -6; line <= 6; line++) curve(line, line === 0 ? .55 : .09 + (6 - Math.abs(line)) * .018, time);
      points.forEach((point, index) => {
        const drift = !motion.matches && point.moves ? Math.sin(time * .00022 + point.phase) * point.drift : 0;
        const flicker = !motion.matches && index % 17 === 0 ? .14 * Math.sin(time * .0004 + point.phase) : 0;
        context.fillStyle = `rgba(${point.shade},${point.shade},${point.shade},${Math.max(.16, point.alpha + flicker)})`;
        context.beginPath(); context.arc(point.x + drift * .55, point.y + drift, point.r, 0, Math.PI * 2); context.fill();
      });
      if (!motion.matches) frame = requestAnimationFrame(draw);
    };
    resize(); draw(); window.addEventListener("resize", resize);
    const motionChange = () => { cancelAnimationFrame(frame); draw(); };
    motion.addEventListener("change", motionChange);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); motion.removeEventListener("change", motionChange); };
  }, []);

  return <div className="hero-visual" aria-hidden="true"><canvas ref={canvasRef}/><div className="visual-label label-one"><strong>Data Exploration</strong><span>Understand the data</span></div><div className="visual-label label-two"><strong>Feature Engineering</strong><span>Extract meaningful information</span></div><div className="visual-label label-three"><strong>Model Development</strong><span>Build predictive systems</span></div><div className="visual-label label-four"><strong>Deployment &amp; Impact</strong><span>Deliver real-world value</span></div></div>;
}
