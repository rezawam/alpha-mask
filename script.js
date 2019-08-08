function draw() {

	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	var base = new Image();
	base.onload = function() {
		ctx.drawImage(base,0,0);
		ctx.globalCompositeOperation = 'destination-in'; //криво
	};
	base.src = "base.png";

	var element = new Image();
	element.onload = function() {
		ctx.drawImage(element,0,0);
	};
	element.src = "element.png";

}

