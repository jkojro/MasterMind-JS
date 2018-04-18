var color_palette = ["czerwony.png", "fioletowy.png", "niebieski.png", "pomaranczowy.png",
			"zielony.png", "zolty.png"];

//alert(color_palette[5]);

//console.log(color_palette);

var e0 = document.getElementById('e0');
var e1 = document.getElementById('e1');
var e2 = document.getElementById('e2');
var e3 = document.getElementById('e3');

<<<<<<< HEAD
e0.addEventListener("click", function() {chooseColor(1, 0); });
e1.addEventListener("click", function() {chooseColor(1, 1); });
e2.addEventListener("click", function() {chooseColor(1, 2); });
e3.addEventListener("click", function() {chooseColor(1, 3); });

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');

c0.addEventListener("click", function() {chooseColor(0, 0); });
c1.addEventListener("click", function() {chooseColor(0, 1); });
c2.addEventListener("click", function() {chooseColor(0, 2); });
c3.addEventListener("click", function() {chooseColor(0, 3); });
c4.addEventListener("click", function() {chooseColor(0, 4); });
c5.addEventListener("click", function() {chooseColor(0, 5); });
=======
e0.addEventListener("click", function() {chooseColor(0); });
e1.addEventListener("click", function() {chooseColor(1); });
e2.addEventListener("click", function() {chooseColor(2); });
e3.addEventListener("click", function() {chooseColor(3); });
>>>>>>> fd794c42e0817dd190b4784c119cff9794c85388

//$('#c0').on("click", () => {  $('#c0').chooseColor(0);}
//$(#c2).on("click", () => { function() chooseColor(2);}

<<<<<<< HEAD
var colorActive = false;
var holeActive = false;
var selectedColor = "pusty.png";
var image = "url(img/"+selectedColor+")";


function chooseColor(row, nr) {
	//alert(nr);

	if (row == 0)
	{
		colorActive = true;
		selectedColor = color_palette[nr];
		
		//alert( selectedColor);
	} else if(row == 1)
	{
		holeActive = true;
		if (colorActive == true && holeActive == true)
		{
			image = "url(img/"+selectedColor+")";
			$('#e'+nr).css('background-image', image);
			//alert( image);
		}
	}
=======
function chooseColor(nr) {
	alert(nr);
>>>>>>> fd794c42e0817dd190b4784c119cff9794c85388
}