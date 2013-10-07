$.fn.wave = function(options) {
    var WAVELENGTH_MAGNIFY = 5;
    var wave = $.extend({
        wavelength: 20,
        amplitude: 80,
        phase: 0,
        width: 600,
        color: "DodgerBlue",
        thickness: 3
    }, options );
    var height = wave.amplitude * 2;

    this.css({
        "width": wave.width,
        "height": height,
        "display": "inline-block"
    });

    //create canvas
    var canvas = document.createElement("canvas");
    canvas.width = wave.width;
    canvas.height = height;
    document.getElementById(this.attr("id")).appendChild(canvas);

    //create buffer
    var buffer = document.createElement("canvas");
    buffer.width = wave.width;
    buffer.height = height;

    //draw wave
    var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, buffer.width, buffer.height);

	ctx.strokeStyle = wave.color;
	ctx.lineWidth = wave.thickness;

	var phase = wave.phase * Math.PI / 180;
	var amp = (height * wave.amplitude) / (2 * 100) - 2;
	var freq = 2 * Math.PI * (1 / (wave.wavelength * WAVELENGTH_MAGNIFY));
	var yOrigin = height / 2;

	var y1, y2;
	ctx.beginPath();
	for ( var i = 0; i < wave.width; i++) {
		y1 = amp * Math.sin(phase + freq * i) + yOrigin;
		y2 = amp * Math.sin(phase + freq * (i + 1)) + yOrigin;
		ctx.moveTo(i, y1); console.log(i + " " + y1);
		ctx.lineTo(i + 1, y2);
	}
	ctx.stroke();

	//var front_ctx = canvas.getContext("2d");
	//front_ctx.clearRect(0, 0, wave.width, wave.height);
	//front_ctx.drawImage(buffer, 0, 0);

    return this;
};