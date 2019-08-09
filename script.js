function draw() {

	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	canvas.width = canvas.width; //refresh canvas

	var base = new Image();
	base.onload = function bas() {
		ctx.drawImage(base,0,0);
	};

	var num = document.getElementById("myinput").value;
	base.src = "bases/" + num + ".png";

	var element = new Image();
	function elem() {
		ctx.globalCompositeOperation = 'destination-in';
		ctx.drawImage(element,0,0);
	};
	element.src = "element.png";

	setTimeout(elem, 20);

}

