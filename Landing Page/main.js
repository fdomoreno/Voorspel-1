$(document).on('ready',function(){


var obj=$("ol:nth-child(1)")
,	path="#Seccion-articulos ul"

//$("ol:nth-child("+i+")").children(".Equipo2").css({"background-image":"url("+ Equipo1[i] +")"});

for( var i=0;i<5;i++ ){

	obj.clone().appendTo(path);



}//termin iteresion




















});//termina documento 