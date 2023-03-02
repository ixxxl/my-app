import React, { useEffect, useRef } from 'react';
import { useAxiosGet } from '../services/hooks/axios';
// const mockData: number[] = [300, 400, 500, 150];
interface IProps {
  idno: number | undefined;
}






const Canvas = (props: IProps) => {
  const canvasRef = useRef(null);

  const { data, error, loaded } = useAxiosGet(
    `http://localhost:3010/statistic?idno=${props.idno}`
  );
  let a: number[];
  let max: number;
  useEffect(() => {
    if (data) {
      a = data[0].semesters;
      // for(let x of a){
      //   console.log(x)

      // }
      console.log(a.length);
      max = Math.max(...a);
      console.log(200 / max);
      console.log(a[0]);
      // console.log(Math.min(...a))
    }
  }, [data]);

  const draw = (ctx: any) => {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '5';
    // ctx.moveTo(50, a);
    // ctx.lineTo(500, a);
    ctx.fillRect(60, 100, 100, 40);
    ctx.stroke();
    // ctx.arc(50, 100, 20, 0, 2 * Math.PI);
   // ctx.fill();
  };
  useEffect(() => {
    const canvas: any = canvasRef.current;
    canvas.width = 200;
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