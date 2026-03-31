import { useEffect, useRef } from "react";

export default function FloatingLines({
  enabledWaves = ["top", "middle", "bottom"],
  lineCount = 5,
  lineDistance = 20,
  bendRadius = 20,
  bendStrength = -0.5,
  interactive = true,
  parallax = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    if (interactive) window.addEventListener("mousemove", handleMouseMove);

    function drawLine(yOffset) {
      ctx.beginPath();
      for (let x = 0; x <= width; x += 10) {
        let y = yOffset;

        if (interactive) {
          const dx = x - mouse.x;
          const dy = yOffset - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          y += (bendStrength * bendRadius * 100) / (dist + 100);
        }

        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(16,185,129,0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const spacing = height / (enabledWaves.length + 1);

      enabledWaves.forEach((wave, i) => {
        for (let j = 0; j < lineCount; j++) {
          drawLine(spacing * (i + 1) + j * lineDistance);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}