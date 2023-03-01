import React, { useEffect, useRef } from 'react';
const mockData: number[] = [300, 400, 500, 150];

const Canvas = () => {
  const canvasRef = useRef(null);

  const draw = (ctx: any) => {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '5';
    ctx.moveTo(mockData[0], mockData[1]);
    ctx.lineTo(mockData[2], mockData[3]);
    ctx.stroke();
   // ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  };
  useEffect(() => {
    const canvas: any = canvasRef.current;
    canvas.width = 600;
    canvas.height = 400;
    const context: any = canvas.getContext('2d');

    const render = () => {
      draw(context);
    };
    render();
  }, [draw]);

  return <canvas ref={canvasRef} />; //width={'800px'} height={'600px'}
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
