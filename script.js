var count = 0

function draw() {

	// if (count >= 1) {
	// 	//alert('жопа')
	// } else {
	// 	//alert(count);

		const canvas = document.getElementById('canvas');
		const ctx = canvas.getContext('2d');

		canvas.width = canvas.width;

	var base = new Image();
	base.onload = function() {
		ctx.drawImage(base,0,0);
		ctx.globalCompositeOperation = 'destination-in';
	};

	var num = document.getElementById("myinput").value;
	base.src = "bases/" + num + ".png";

	var element = new Image();
	element.onload = function test() {
		ctx.drawImage(element,0,0);
	};
	element.src = "element.png";

	count++;

	// }


}

