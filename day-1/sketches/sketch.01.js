const canvasSketch = require("canvas-sketch");

const settings = {
	dimensions: [1048, 1048],
};

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = "#32213A";
		context.fillRect(0, 0, width, height);
		const w = width * 0.05;
		const h = height * 0.05;
		const gap = width * 0.008;
		const initialX = width * 0.21;
		const initialY = height * 0.21;
		const offset = width * 0.01;
		let x, y;

		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				x = initialX + i * (w + gap);
				y = initialY + j * (h + gap);
				context.beginPath();
				context.rect(x, y, w, h);
				context.strokeStyle = "#D4D6B9";
				context.stroke();

				if (Math.random() < 0.5) {
					context.beginPath();
					context.rect(x + offset, y + offset, w - offset * 2, h - offset * 2);
					context.strokeStyle = "#D4D6B9";
					context.stroke();
				}
			}
		}
	};
};

canvasSketch(sketch, settings);
