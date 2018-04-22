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

$('#go1').on('click', function (){ go(1); });
$('#go2').on('click', function (){ go(2); });
$('#go3').on('click', function (){ go(3); });
$('#go4').on('click', function (){ go(4); });
$('#go5').on('click', function (){ go(5); });
$('#go6').on('click', function (){ go(6); });

$('#e0').on('click', function() {chooseColor(1, 0); });
$('#e1').on('click', function() {chooseColor(1, 1); });
$('#e2').on('click', function() {chooseColor(1, 2); });
$('#e3').on('click', function() {chooseColor(1, 3); });

$('#e10').on('click', function() {chooseColor(2, 10); });
$('#e11').on('click', function() {chooseColor(2, 11); });
$('#e12').on('click', function() {chooseColor(2, 12); });
$('#e13').on('click', function() {chooseColor(2, 13); });

$('#e20').on('click', function() {chooseColor(3, 20); });
$('#e21').on('click', function() {chooseColor(3, 21); });
$('#e22').on('click', function() {chooseColor(3, 22); });
$('#e23').on('click', function() {chooseColor(3, 23); });

$('#e30').on('click', function() {chooseColor(4, 30); });
$('#e31').on('click', function() {chooseColor(4, 31); });
$('#e32').on('click', function() {chooseColor(4, 32); });
$('#e33').on('click', function() {chooseColor(4, 33); });

$('#e40').on('click', function() {chooseColor(5, 40); });
$('#e41').on('click', function() {chooseColor(5, 41); });
$('#e42').on('click', function() {chooseColor(5, 42); });
$('#e43').on('click', function() {chooseColor(5, 43); });

$('#e50').on('click', function() {chooseColor(6, 50); });
$('#e51').on('click', function() {chooseColor(6, 51); });
$('#e52').on('click', function() {chooseColor(6, 52); });
$('#e53').on('click', function() {chooseColor(6, 53); });

$('.start').on('click', function() { start(); });


//$('#c0').on("click", () => {  $('#c0').chooseColor(0);}
//$(#c2).on("click", () => { function() chooseColor(2);}

var rows = [[], [], [], [], [], []];

function go(nr) {

	rowStatus(rows[nr-1]);
	$('#ch'+nr).addClass('done_choice');
	$('#ch'+nr).removeClass('actual_choice');
	if (nr-1 > 0) //do przedostatniego rzędu
	{
		$('#ch'+(nr-1)).addClass('actual_choice');
		$('#ch'+(nr-1)).removeClass('choice');
	} 

	$('#go'+nr).css('display', 'none');
	$('#score'+nr).css('display', 'inline-block');

	//let actualRow = rows[(nr-1)][0];

	//alert(rows[5][54]);

	//alert(rowStatus(actualRow));

	
}


var colorActive = false;
var holeActive = false;
var selectedColor = "pusty.png";
var image = "url(img/"+selectedColor+")";




function chooseColor(row, nr) {
	//alert(nr);
	
	if (row == 0)
	{
		colorActive = true;
		$('#c'+nr).toggleClass('colorActive');
		selectedColor = color_palette[nr];
		
		//alert( selectedColor);
	} else if ($('#ch'+row).hasClass("actual_choice"))
	{
		holeActive = true;
		$('#e'+nr).toggleClass('emptyActive');

		if (colorActive == true && holeActive == true)
		{
			image = "url(img/"+selectedColor+")";
			$('#e'+nr).css('background-image', image);
			$('#e'+nr).removeClass('emptyActive');
			rows[row-1][nr-((row-1)*10)] = selectedColor;
			//alert("rows["+row-1+"]["+nr+"]= "+rows[row-1][nr]);
		}
		//alert(rows[row-1])
	}
}



function setHiddenRow() {
	var hiddenRow = [];
	for (i = 0; i<4; i++) 
	{
		hiddenRow.push(color_palette[Math.floor(Math.random() * 5)]);
		
	}
	return hiddenRow;
}
;

function rowStatus(row) {
	var red = 0;
	var white = 0;
	var whiteAndRed = 0;
	//var row = rowow;

	for(i = 0; i < row.length; i++) 
	{
		//alert('hiddenRow[i]= '+hiddenRow[i]+' row[i]= '+row[i])
		if (hiddenRow[i] === row[i]) 
		{
			red++;
		}
	}
	//color_palette.forEach()

	for (j = 0; j < color_palette.length; j++)
	{
		//alert(color_palette[j]+" w row = "+countColor(color_palette[j], row));
		whiteAndRed += Math.min(countColor(color_palette[j], row), countColor(color_palette[j], hiddenRow));
	}
	white = whiteAndRed - red;
	alert("red = "+red+", white = "+white);
	return [red, white];
}

function countColor(color, row) {
	var count = 0;
	for(i = 0; i < row.length; i++)
	{
		if (row[i] === color)
			{count++;}	
	}
	return count;
}

function start() {
	$('.start').hide();
	hiddenRow = setHiddenRow();
	$('#ch6').addClass('actual_choice');
	$('#ch6').removeClass('choice');
	alert(hiddenRow);
}
