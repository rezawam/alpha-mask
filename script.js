function draw() {

	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	canvas.width = canvas.width; //refresh canvas

	var element = new Image();
	element.src = "element.png";
	canvas.style.display = 'none';
	canvas.start = "300";
	element.onload = function elem() {
		ctx.drawImage(element,0,0);
		var base = new Image();
		var num = document.getElementById("myinput").value;
		base.src = "bases/" + num + ".png";
		base.onload = function bas() {
			ctx.globalCompositeOperation = 'source-in';
			ctx.drawImage(base,0,0);
			canvas.style.display = 'unset';
		};
	};
	
	var frame = 0;
	var times = [100, 500, 1000, 42, 55];
	var size = 15;
	if (!canvas.start)
		setTimeout(function anim() {
			frame++;
			if (frame >= times.length) {
				frame = 0;
			}
			canvas.style.left = -frame * size + "px";

			setTimeout(anim, times[frame]);
		}, times[0]);
	canvas.start = true;


	//молимся ребят

}

