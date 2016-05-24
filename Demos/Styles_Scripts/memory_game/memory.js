function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function chunkArray(arrayShuffled, size){
	var arrayChunked = [];
	while (arrayShuffled.length > 0)
    	arrayChunked.push(arrayShuffled.splice(0, size));

    return arrayChunked;
}

function refreshGameInformations(lifes, pairFound) {
	$("span#lifes").html(lifes);
	$("span#pair-found").html(pairFound);
}

function revealedBoard(boardGame){
	
	$(".revealed").removeClass("revealed");
	$("div#game-board table td").addClass("found");
	for(var i = 0; i < boardGame.length; i++){
		for(var j = 0; j < boardGame[i].length; j++)
		{
			$("div#game-board table tr").eq(i).children("td").eq(j).children("img").attr("src", "img/" + boardGame[i][j] + ".jpg");
		}
	}

	$("#result").html("Vous avez perdu !").css("color", "red");
}

function initNewGame() {
	var imagesNames = ["1","2","3","4","5","6","7","8"];
	var doubleImages = imagesNames.concat(imagesNames.slice());

	var shuffleImages = shuffle(doubleImages);
	var shuffleChunkedImages = chunkArray(shuffleImages, 4);

	
	_WAIT = false;
	_LIFES = 5;
	_PAIRFOUND = 0;

	refreshGameInformations(_LIFES, _PAIRFOUND);

	$(".revealed").removeClass("revealed");
	$(".found").removeClass("found");

	$("#result").html("");
	$("div#game-board table tr td img").attr("src", "img/card-back.jpg");

	return shuffleChunkedImages;
}

var _LIFES = 5,
	_PAIRFOUND = 0,
	_WAIT = false;


$(document).ready(function(){

	var shuffleChunkedImages = initNewGame();

	$("button#new-game").on("click", function(){
		shuffleChunkedImages = initNewGame();
	});

	$("td:not(.found):not(.revealed)").on("click", function(e) {

		var i = $(this).parent("tr").index();
		var j = $(this).index();

		if($(".revealed").length < 2)
		{
			$(this).addClass("revealed");
			$(this).children("img").attr("src", "img/" + shuffleChunkedImages[i][j] + ".jpg");
			_WAIT = false;
		}
		
		if($(".revealed").length == 2 && !_WAIT)
		{
			_WAIT = true;
			var firstRevealed = $($(".revealed").get(0)).children("img").attr("src");
			var secondRevealed = $($(".revealed").get(1)).children("img").attr("src");

			if(firstRevealed === secondRevealed)
			{
				$(".revealed").addClass("found");
				_PAIRFOUND++;
				$(".revealed").removeClass("revealed");
			}else{
				_LIFES--;
				setTimeout(function(){
					$(".revealed").children("img").attr("src", "img/card-back.jpg");
					$(".revealed").removeClass("revealed");
					_WAIT = false;
					
					refreshGameInformations(_LIFES, _PAIRFOUND);
					if(_LIFES == 0)
					{
						revealedBoard(shuffleChunkedImages);
					}
				},1000);

				

			}
			
		}
		refreshGameInformations(_LIFES, _PAIRFOUND);
		
	});
});

