var http=require('http')
,	express=require('express')
,	app=express()
,	server=http.createServer(app);


app.configure(function(){
	app.use(express.static(__dirname+'/Landing Page'));
});

app.get('/',function (req,res){

	res.send("work ?")

});

console.log("escuchando en el puerto 3434");

server.listen(3434)
