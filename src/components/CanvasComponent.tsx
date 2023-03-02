import React, { useEffect, useRef, useState } from 'react';
import { useAxiosGet } from '../services/hooks/axios';
// const mockData: number[] = [300, 400, 500, 150];
interface IProps {
  idno: number | undefined;
}
interface IPoint {
  x: number;
  y: number;
}

const Canvas = (props: IProps) => {
  const canvasRef = useRef(null);
  const [points, setPoints] = useState<IPoint[]>([]);
  const { data, error, loaded } = useAxiosGet(
    `http://localhost:3010/statistic?idno=${props.idno}`
  );

  const drawPoint = (ctx: any, p: IPoint) => {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '5';
console.log(loaded);
    // ctx.moveTo(50, a);
    // ctx.lineTo(500, a);
    // ctx.fillRect(60, 100, 100, 40);
    // ctx.stroke();
    ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  };

  const drawLine = (ctx: any, p: IPoint) => {};

  useEffect(() => {
    const canvas: any = canvasRef.current;
    canvas.width = 400;
    canvas.height = 200;
    const context: any = canvas.getContext('2d');

    const renderLine = () => {
      for (let p of points) {
        drawLine(context, p);
      }
    };
    renderLine();
  }, [drawLine, points]);

  useEffect(() => {
    let a: number[];
    let max: number;

    if (data && data.length > 0) {
      a = data[0].semesters;
      max = Math.max(...a);
      let k = 180 / max;
      let x = 50;
      let ps: IPoint[] = [];
      for (let i of a) {
        let y = 180 - Math.round(i * k);
        x += 50;
        ps.push({ x: x, y: y });
      }
      setPoints(ps);
    }
  }, [data]);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    canvas.width = 400;
    canvas.height = 200;
    const context: any = canvas.getContext('2d');

    const render = () => {
      for (let p of points) {
        drawPoint(context, p);
      }
    };
    render();
  }, [drawPoint, points]);

  return (
    <div>
      <canvas style={{ border: '1px solid red' }} ref={canvasRef} /> 
    
    </div>
  );
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

// const SimpleCanvasExample: React.FC<{}> = () => {
//   let canvasRef = useRef<HTMLCanvasElement | null>(null);
//   let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

//   useEffect(() => {
//     // Initialize
//     if (canvasRef.current) {
//       canvasCtxRef.current = canvasRef.current.getContext('2d');
//       let ctx = canvasCtxRef.current;
//       ctx!.beginPath();
//       ctx!.arc(95, 50, 40, 0, 2 * Math.PI);
//       ctx!.stroke();
//     }
//   }, []);

//   return <canvas ref={canvasRef}></canvas>;
// };

// export  SimpleCanvasExample;
