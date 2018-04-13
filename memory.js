var color_palette = ["czerwony.png", "fioletowy.png", "niebieski.png", "pomaranczowy.png",
			"zielony.png", "zolty.png"];

//alert(color_palette[5]);

//console.log(color_palette);

var e0 = document.getElementById('e0');
var e1 = document.getElementById('e1');
var e2 = document.getElementById('e2');
var e3 = document.getElementById('e3');

e0.addEventListener("click", function() {chooseColor(0); });
e1.addEventListener("click", function() {chooseColor(1); });
e2.addEventListener("click", function() {chooseColor(2); });
e3.addEventListener("click", function() {chooseColor(3); });

//$('#c0').on("click", () => {  $('#c0').chooseColor(0);}
//$(#c2).on("click", () => { function() chooseColor(2);}

function chooseColor(nr) {
	alert(nr);
}