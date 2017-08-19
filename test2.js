var http=require('http');
var file=require('fs')

http.createServer(function(req,res){
file.readFile('test_2.html',function(err,data){

res.writeHead(200,{'Content-Type':'text/html'});
res.write(data);
//res.end();
});

}).listen(8081);

console.log("running at 8081");