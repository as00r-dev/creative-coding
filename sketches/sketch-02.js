const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
	dimensions: [1080, 1080],
};

// const degToRad = (degrees) => {
// 	return (degrees / 180) * Math.PI;
// };

// const randomRange = (max, min) => {
// 	return Math.random() * (max - min) + min;
// };

const sketch = () => {
	return ({ context, width, height }) => {
		context.fillStyle = "#121212";
		context.fillRect(0, 0, width, height);
		context.fillStyle = "whitesmoke";

		const centerX = width * 0.5;
		const centerY = height * 0.5;
		const w = width * 0.01;
		const h = width * 0.1;
		const number = 12;
		const slice = math.degToRad(360 / number);

		const radius = width * 0.3;

		for (let i = 0; i < number; i++) {
			const angle = slice * i;
			const x = centerX + radius * Math.sin(angle);
			const y = centerY + radius * Math.cos(angle);

			context.save();

			context.translate(x, y);
			context.rotate(-angle);
			context.scale(random.range(5, 1), 1);
			context.beginPath();
			context.rect(-w * 0.5, -h * 0.5, w, h);
			context.fill();

			context.restore();
		}
	};
};

canvasSketch(sketch, settings);
