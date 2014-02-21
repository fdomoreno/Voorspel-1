$(document).on('ready',function(){


$(".SelecJuegos").click(function(){
	$(".Juegos").css({'display':'block'})
	$(".Torneos").css({'display':'none'})
});




$(".SelecTorneos").click(function(){
	$(".Juegos").css({'display':'none'});
	$(".Torneos").css({'display':'block'});
});

$(".NewGame").click(function(){

	$(".Contenedor-Formulario").css({'display':'block'})
});


});//termina jquery