var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("<a href=a> hai </a>");
	var x=req.url;
	if(x=='/a')
	{
		res.write("hai");
		fs.readFile('test_2.html',function(err,data){

		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		res.end();
		});

	}
	res.end();

}).listen(8081);

console.log("running at 8081");