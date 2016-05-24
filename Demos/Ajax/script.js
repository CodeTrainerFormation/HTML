var url = "data.json";

document.getElementById("get-data").addEventListener("click", function(e) {

	/*var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			console.log(JSON.parse(xhr.responseText));
		}
	}

	xhr.open("GET", url);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send();*/

	$.ajax({
    type: "GET",
    url: url,
    crossDomain : true,
	})
    .done(function( data ) {
        console.log(data);
    })
    .fail( function(xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
        alert(textStatus);
    });

});

