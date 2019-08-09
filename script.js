function draw() {

	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	canvas.width = canvas.width; //refresh canvas

	var element = new Image();
	element.onload = function elem() {
		ctx.drawImage(element,0,0);
	};
	element.src = "element.png";

	var base = new Image();
	base.onload = function bas() {
		ctx.globalCompositeOperation = 'source-in';
		ctx.drawImage(base,0,0);
	};

	var num = document.getElementById("myinput").value;
	base.src = "bases/" + num + ".png";


	//молимся ребят

}

