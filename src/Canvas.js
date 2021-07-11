import React, { useEffect, useState, color } from 'react';

const Canvas = ({ canvasRef, ctx, color }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = window.innerHeight * 2;
    canvas.width = window.innerWidth * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const context = canvas.getContext('2d');

    // context.stroke = '#f00000';
    // context.strokeWidth = '2';
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = 5;
    ctx.current = context;
  }, []);

  useEffect(() => {
    ctx.current.strokeStyle = color;
  }, [color]);

  const handleMouseDown = ({ nativeEvent }) => {
    console.log('this');
    const { offsetX, offsetY } = nativeEvent;
    ctx.current.beginPath();
    ctx.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };
  const handleMouseMove = ({ nativeEvent }) => {
    console.log('this');
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;

    ctx.current.lineTo(offsetX, offsetY);
    ctx.current.stroke();
  };
  const handleMouseUp = () => {
    ctx.current.closePath();
    setIsDrawing(false);
  };

  return (
    <div
      className="col-md-8 overflow-hidden border border-dark px-0 mx-auto mt-3"
      style={{ height: '500px' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;
