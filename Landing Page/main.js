$(document).on('ready',function(){


var obj=$("ol:nth-child(1)")
,	path="#Seccion-articulos ul"
,	array=['green','black','red','olive','darkred','tan','wheat']
, 	indice=1

for( var i=0;i<array.length;i++ ){

	obj.clone().appendTo(path);
	indice++
$("#Seccion-articulos ul ol:nth-child("+indice+")").children("div").css({"background":""+array[i]+""});


}//add items


//$("ol:nth-child("+i+")").children("div").css({"background":""+array[i]+""});
//#Seccion-articulos ul ol:nth-child(1)



















});//termina documento 