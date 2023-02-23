import { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    context.lineTo(50, 100);
    context.stroke();
  }, []);
  return <canvas ref={canvasRef} />;
};

export default Canvas;

// canvas.onmousemove = function (event) {
//     var x = event.offsetX;
//     ctx.clearRect(0, 0, 400, 200);
//     ctx.beginPath();
//     let y = event.offsetY;
//     let radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);
//     ctx.arc(200, 100, radius, 0, 2 * pi, false);
//     ctx.stroke();
//     ctx.fill();
//   };
