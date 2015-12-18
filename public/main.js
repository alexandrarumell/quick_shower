$(document).ready(function(){

	$("#click").on("click", function(){
		$("#lightbox").show();
		$("#lightbox").on("click", function(){
			$(this).hide();
		});
	});
});