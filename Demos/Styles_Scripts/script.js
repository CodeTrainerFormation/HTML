window.onload = function () {
	$("#btn-visible").on("click", function() {
        if($("#visibility-child").css("visibility") == "hidden") {
            $("#visibility-child").css("visibility", "visible");
        }else {
            $("#visibility-child").css("visibility", "hidden");
        }
    });

    $("#btn-display").on("click", function() {
    	$("#display-child").toggle();
    });
}

