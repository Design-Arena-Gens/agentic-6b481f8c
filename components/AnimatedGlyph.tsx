"use client";

import { useEffect, useRef } from "react";

const STARS = 240;

export function AnimatedGlyph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    const deviceRatio = window.devicePixelRatio || 1;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * deviceRatio;
      canvas.height = height * deviceRatio;
      context.scale(deviceRatio, deviceRatio);
    };

    const glyphPoints = Array.from({ length: STARS }).map((_, index) => {
      const angle = (index / STARS) * Math.PI * 2;
      return {
        baseRadius: 55 + Math.sin(angle * 6) * 24,
        angle,
        speed: 0.0008 + Math.random() * 0.0012,
        offset: Math.random() * Math.PI * 2
      };
    });

    const stars = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.9 + 0.2,
      twinkle: Math.random() * Math.PI * 2
    }));

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      context.fillStyle = "rgba(8, 12, 25, 0.65)";
      context.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        const twinkle =
          (Math.sin(time * 0.0015 + star.twinkle) + 1.7) * 0.4 + 0.3;
        context.beginPath();
        context.fillStyle = `rgba(110, 170, 255, ${twinkle})`;
        context.arc(star.x, star.y, star.radius * twinkle, 0, Math.PI * 2);
        context.fill();
      });

      context.save();
      context.translate(width / 2, height / 2);

      const gradient = context.createRadialGradient(0, 0, 0, 0, 0, 180);
      gradient.addColorStop(0, "rgba(106, 141, 255, 0.75)");
      gradient.addColorStop(0.4, "rgba(77, 240, 255, 0.6)");
      gradient.addColorStop(1, "rgba(6, 12, 32, 0)");
      context.strokeStyle = gradient;
      context.lineWidth = 1.6;
      context.beginPath();

      glyphPoints.forEach((point, index) => {
        const breathing = Math.sin(time * point.speed + point.offset);
        const radius = point.baseRadius + breathing * 12;
        const x = Math.cos(point.angle) * radius;
        const y = Math.sin(point.angle) * radius * 0.78;

        if (index === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      });

      context.closePath();
      context.stroke();

      context.globalCompositeOperation = "lighter";
      glyphPoints.forEach((point) => {
        const breathing = Math.sin(time * point.speed + point.offset);
        const radius = point.baseRadius + breathing * 13;
        const x = Math.cos(point.angle) * radius;
        const y = Math.sin(point.angle) * radius * 0.78;
        const glow = (breathing + 1.4) * 0.45;

        context.beginPath();
        context.fillStyle = `rgba(77, 240, 255, ${glow})`;
        context.arc(x, y, 2.2 + glow * 4, 0, Math.PI * 2);
        context.fill();
      });

      context.restore();

      frameRef.current = requestAnimationFrame(draw);
    };

    resize();
    frameRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="glyph-shell">
      <canvas ref={canvasRef} className="glyph-canvas" />
    </div>
  );
}

export default AnimatedGlyph;
