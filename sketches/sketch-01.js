const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005;

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const iX = width * 0.17;
    const iY = height * 0.17;
    const off = width * 0.06;
    let x, y;
    let counter = 0;

      for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) { 
            x = iX + (w + gap) * i;
            y = iY + (h + gap) * j;

            context.beginPath();
            context.strokeStyle = 'white';
            context.rect(x, y, w, h);
            context.stroke();

            if(i === counter) {
              context.beginPath();
              context.rect(x + off / 2, y + off / 2, w - off, h - off);
              context.stroke();
            }
        }
      }

  };
};

canvasSketch(sketch, settings);
