$("ul").on("click","li",function(){
	$(this).toggleClass("tick");
});
$("ul").on("click","span",function(event){
$(this).parent().fadeOut(1000,function(){
	$(this).remove();
});
event.stopPropagation();
});

$("input").on("keypress",function(event){
if(event.which===13){
	var m=$(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + m + "</li>");
}
});


$(".fa-plus").on("click",function(){
$("input[type='text']").fadeToggle();
});

















