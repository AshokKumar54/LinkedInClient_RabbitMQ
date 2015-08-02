function showErrorControl(message, controlId) {
    var label = "<label class='error' href='#' title='" + message + "'></label>";
    $("#" + controlId).parent().find(".error").remove();
    var rel = $("#" + controlId).parent().attr("rel");
    var margintop = $("#" + rel).css("margin-top")
    $("#" + rel).after(label);
    $("#" + rel).parent().find(".error").css("margin-top", margintop);
    $("#" + controlId).addClass("errorInput");
}

function removeErrorControl(controlId) {
	var margintop = $("#" + controlId).parent().find(".error").css("margin-top");
    $("#" + controlId).css("margin-top", margintop);
    $("#" + controlId).removeClass("errorInput");
    $("#" + controlId).parent().find(".error").remove();
}