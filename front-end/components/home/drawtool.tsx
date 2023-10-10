import React, { useLayoutEffect, useState } from 'react';


import useDraw from 'hooks/useDraw';
import DrawActionButton from './drawActionButton';

const DrawingTool = () => {
    const { canvasRef, handleUndo, clear } = useDraw(drawFreeHand);
    function drawFreeHand({ prevPoint, currentPoint, ctx }: Draw) {
        const { x: currX, y: currY } = currentPoint;
        const lineColor = '#000';
        const lineWidth = 2;
        let startPoint = prevPoint ?? currentPoint;
        ctx.beginPath()
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(currX, currY);
        ctx.stroke();
        ctx.fillStyle = lineColor;
        ctx.beginPath()
        ctx.arc(startPoint.x, startPoint.y, 0.5, 0, 0.5 * Math.PI);
        ctx.fill()
        ctx.save();
    }


    return (
        <div className='w-full relative '>
            <canvas
                id="canvas"
                className='bg-table bg-[length:20px_20px] block'


                ref={canvasRef}
                width={800} height="300"

            >
                Canvas
            </canvas>

            <div className='absolute top-2 right-2 z-40 w-fit'>
                <DrawActionButton onClick={clear} title='Xoá' />
                <DrawActionButton onClick={handleUndo} title='Hoàn tác' />
            </div>
        </div>
    );
};
export default DrawingTool;