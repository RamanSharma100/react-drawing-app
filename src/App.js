import React, { useRef, useState } from 'react';
import './style.css';

import Canvas from './Canvas';

const App = () => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [color, setColor] = useState('#000000');

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="display-5 pt-4 pb-3 text-center">React Drawing App</h1>
      </div>
      <div className="row justify-content-center align-items-center text-center py-2">
        <div className="col-md-2">
          <div className="color-picker d-flex align-items-center justify-content-center">
            Color Picker : &nbsp;
            <input
              type="color"
              value={color}
              onChange={e => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-1">
          <div className="color-picker d-flex align-items-center justify-content-center">
            <input
              type="button"
              className="btn btn-danger"
              value="clear canvas"
              onClick={clearCanvas}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <Canvas canvasRef={canvasRef} ctx={ctx} color={color} />
      </div>
    </div>
  );
};
export default App;
