var http=require('http')
,	express=require('express')
,	app=express()
,	server=http.createServer(app);


app.configure(function(){
	app.use(express.static(__dirname+'/Landing Page'));
	app.use(express.static(__dirname+'/Administrador'));

});

app.get('/',function (req,res){

	res.sendfile(__dirname+'/Landing Page/index.html/','utf-8')
});

app.get('/admin',function (req,res){


	res.sendfile(__dirname+'/Administrador/admin.html')
});



console.log("escuchando en el puerto 3434");

server.listen(3434)
