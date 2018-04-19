var color_palette = ["czerwony.png", "fioletowy.png", "niebieski.png", "pomaranczowy.png",
			"zielony.png", "zolty.png"];

//alert(color_palette[5]);

//console.log(color_palette);


$('#c0').on('click', function() { chooseColor(0, 0);});
$('#c1').on('click', function() { chooseColor(0, 1);});
$('#c2').on('click', function() { chooseColor(0, 2);});
$('#c3').on('click', function() { chooseColor(0, 3);});
$('#c4').on('click', function() { chooseColor(0, 4);});
$('#c5').on('click', function() { chooseColor(0, 5);});

$('#e0').on('click', function() {chooseColor(1, 0); });
$('#e1').on('click', function() {chooseColor(1, 1); });
$('#e2').on('click', function() {chooseColor(1, 2); });
$('#e3').on('click', function() {chooseColor(1, 3); });


//$('#c0').on("click", () => {  $('#c0').chooseColor(0);}
//$(#c2).on("click", () => { function() chooseColor(2);}

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
}
