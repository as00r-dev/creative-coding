const canvasSketch = require("canvas-sketch");

const settings = {
	dimensions: [1080, 1080],
};

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = "#121212";
		context.fillRect(0, 0, width, height);

		const x = width * 0.5;
		const y = height * 0.5;
		const w = width * 0.3;
		const h = width * 0.3;

		context.save();
		context.translate(x, y);
		context.rotate(Math.PI * 0.25);
		context.fillStyle = "#F5F5F5";
		context.beginPath();
		context.rect(-w * 0.5, -h * 0.5, w, h);
		context.fill();

		context.translate(w * 0.5, h * 0.5);
		context.beginPath();
		context.arc(0, 0, w * 0.25, 0, Math.PI * 2);
		context.fill();
		context.restore();
	};
};

canvasSketch(sketch, settings);
