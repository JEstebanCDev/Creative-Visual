const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    /* Draw a rectangle
        context.fillStyle = '#2596be'
        context.fillRect(50, 50, 200, 300)

        context.beginPath();
        context.rect(50, 50, 200, 300)
        context.stroke(); */

    /* Draw a circle
        context.beginPath();
        context.arc(100, 100, 100, 0, Math.PI * 2);
        context.stroke(); */
    let w = 60;
    let h = 60;
    let gap = 10;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let x = 100 + (w + gap) * i;
        let y = 100 + (w + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        /* if (i != 0 && i != 4 && j != 0 && j != 4) {
                    context.beginPath();
                    context.rect(x + 8, y + 8, w - 16, h - 16)
                    context.stroke();
                } */

        /* if (i == 0 || i == 4 || j == 0 || j == 4) {
                    context.beginPath();
                    context.rect(x + 8, y + 8, w - 16, h - 16)
                    context.stroke();
                } */

        /* if (i != j) {
                    context.beginPath();
                    context.rect(x + 8, y + 8, w - 16, h - 16)
                    context.stroke();
                } */

        if (i != 0 && i != 4 && j != 0 && j != 4) {
          context.beginPath();
          context.rect(x + 8, y + 8, w - 16, h - 16);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
