import React, { useEffect, useRef, useState } from 'react';
import { useAxiosGet } from '../services/hooks/axios';
// const mockData: number[] = [300, 400, 500, 150];
const colorColumn:string[]=["red","blue","green","yellow"] 
const dX =50
interface IProps {
  idno: number | undefined;
}
interface IPoint {
  x: number;
  y: number;
}


const CanvasColumnar = (props: IProps) => {
  const canvasRef = useRef(null);
  const canvasRefLine = useRef(null);
  const [points, setPoints] = useState<IPoint[]>([]);
  const { data, error, loaded } = useAxiosGet(
    `http://localhost:3010/statistic?idno=${props.idno}`
  );
  const drawColumn = (ctx: any, p: IPoint, w: number, h: number,color:string) => {
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.rect(p.x, p.y, w, h);  
    ctx.fillStyle=color;
    ctx.fill();
    ctx.stroke();
  };

  useEffect(() => {
    let a: number[];
    let max: number;

    if (data && data.length > 0) {
      a = data[0].semesters;
      max = Math.max(...a);
      let k = 180 / max;
      let x = dX;
      let ps: IPoint[] = [];
      for (let i of a) {
        let y = 195 - Math.round(i * k);
        x += dX;
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
       
       drawColumn(context,currentPoint,dX,180-currentPoint.y,colorColumn[i])
      }
    };
    render();
  }, [ drawColumn, points]);

  return (
    <div>
      <canvas style={{ border: '1px solid silver' }} ref={canvasRef} />
    </div>
  );
};
export default CanvasColumnar;
