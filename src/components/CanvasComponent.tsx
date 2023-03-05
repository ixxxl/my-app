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
    ctx.lineWidth = '5';
    ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  };

  const drawLine = (ctx: any, p1: IPoint, p2: IPoint) => {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  };

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
        let y = 195 - Math.round(i * k);
        x += 50;
        ps.push({ x: x, y: y });
      }
      setPoints(ps);
    }
  }, [data]);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    canvas.width = 450;
    canvas.height = 200;
    const context: any = canvas.getContext('2d');

    const render = () => {
      for (let i = 0; i < points.length; i++) {
        let currentPoint = points[i];
        let prevPont = i > 0 ? points[i - 1] : points[0];
        drawPoint(context, currentPoint);
        drawLine(context, currentPoint, prevPont);
      }
    };
    render();
  }, [drawPoint, drawLine, points]);

  return (
    <div>
      <canvas style={{ border: '1px solid silver' }} ref={canvasRef} />
    </div>
  );
};
export default Canvas;
