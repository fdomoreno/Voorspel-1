$(document).on('ready',function(){


var Real={
		"nombre":"real madrid",
		"path":"./",
		"hora":"x"
	}
var Barca={
	"nombre":"Barcelona",
	"path":"./",
	"hora":"x"
}
var demon=new Array();
	demon[0]=Real
	demon[1]=Barca

console.log(demon)	

, obj=$("ol:nth-child(1)")
,	equipo1=['http://www.losblanquillos.com/media/galeria/34/1/8/7/7/n_real_zaragoza_varios-7781.jpg','http://elmiradorespagnol.free.fr/futbol/original/Barcelona.gif','http://www.estecha.com/imagen/escudos-futbol-piedra/escudo-villarreal-futbol.jpg']
,	equipo2=['http://4.bp.blogspot.com/_Z_YWTFNHUvw/TQDBKNXdwcI/AAAAAAAACI0/COhwIG2PkFA/s320/Manchester-United%255B1%255D.png','http://1.bp.blogspot.com/-ZoxefaTKvmw/Tp_AUJK7kBI/AAAAAAAAAEU/jR2vDgyzjx4/s1600/escudo-real-madrid-metacrilato-135464_1_293_293.jpg','http://4.bp.blogspot.com/-1QLp4tNAskM/TjsaKNQn2cI/AAAAAAAAAps/KgD5tSw8Gm4/s400/escudo_inter_de_milan_historia_equipo_futbol_cuerdo_atacando.png']
, 	indice1=1
,	indice2=1

for( var i=0;i<equipo1.length;i++ ){


obj.clone().appendTo("#Seccion-articulos ul");
indice1++

$("#Seccion-articulos ul ol:nth-child("+indice1+")").children(".Equipo1").css({"background-image":"url("+equipo1[i]+")"});


}//add Equipo 1


for( var i=0;i<equipo2.length;i++ ){


indice2++

$("#Seccion-articulos ul ol:nth-child("+indice2+")").children(".Equipo2").css({"background-image":"url("+equipo2[i]+")"});


}//add Equipo 2























});//termina documento 