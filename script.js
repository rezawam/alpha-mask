function draw() {

	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	var base = document.getElementById("base");
	ctx.drawImage(base,0,0);

	ctx.globalCompositeOperation = 'destination-in';

	var element = document.getElementById("element");
	ctx.drawImage(element,0,0);


}

