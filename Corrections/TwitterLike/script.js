/*// Récupération des informations utilisateur
var name = document.getElementById("uc-name").innerHTML;
var pseudo = document.getElementById("uc-pseudo").innerHTML;
var picture = document.getElementById("user-pic").getAttribute("src");

// Récupération du textarea permettant d'écrire un nouveau tweet
var textareaNewTweet = document.getElementById("ta-new-tweet");

document.getElementById("btn-add-tweet").addEventListener("click", function(e) {
	// Clone d'un noeud contenant un tweet
	var tweetModel = document.getElementsByClassName("full-tweet")[0].cloneNode(true);

	var contentNewTweet = textareaNewTweet.value;

	tweetModel.getElementsByClassName("real-content")[0].innerHTML = contentNewTweet;
	tweetModel.getElementsByClassName("tweetos-infos")[0].children[0].innerHTML = name;
	tweetModel.getElementsByClassName("tweetos-infos")[0].children[1].innerHTML = pseudo;
	tweetModel.getElementsByClassName("tweet-img-container")[0].children[0].setAttribute("src", picture);

	prependChild(document.getElementById("timeline"), tweetModel);
	textareaNewTweet.value = "";
});

textareaNewTweet.addEventListener("focus", function(e) {
	modifyDisplay("block");
});

textareaNewTweet.addEventListener("blur", function(e) {
	if(e.relatedTarget == null || e.relatedTarget.id != "btn-add-tweet") {
		modifyDisplay("none");
	}
});

var modifyDisplay = function(display) {
	document.getElementById("container-btn-tweet").style.display = display;
}

// Permet de mettre un tweet en haut de liste
var prependChild = function(element, child) {
	if(element.children.length > 0) {
		element.insertBefore(child, element.firstElementChild);
	}else {
		element.appendChild(child);
	}
	modifyDisplay("none");
}*/

$(document).ready(function() {
	var name = $("#uc-name").text();
	var pseudo = $("#uc-pseudo").text();
	var picture = $("#user-pic").attr("src");

	var textareaNewTweet = $("#ta-new-tweet");

	$("#btn-add-tweet").on("click", function(){
		var tweetModel = $(".full-tweet").eq(0).clone();

		var contentNewTweet = textareaNewTweet.val();

		tweetModel.find(".real-content").text(contentNewTweet);
		tweetModel.find(".tweetos-infos").children().eq(0).text(name);
		tweetModel.find(".tweetos-infos").children().eq(1).text(pseudo);
		tweetModel.find(".tweet-img-container").children().attr("src", picture);

		$("#timeline").prepend(tweetModel);
		$("#container-btn-tweet").toggle();
		textareaNewTweet.val("");
	});

	textareaNewTweet.on("focus", function() {
		$("#container-btn-tweet").toggle();
	});

	textareaNewTweet.on("blur", function(e) {
		if(e.relatedTarget == null || e.relatedTarget.id != "btn-add-tweet") {
			$("#container-btn-tweet").toggle();
		}
	});
});


