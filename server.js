var http = require('http');
var sum;
httpServer = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var input=req.url;
  var id=require('url').parse(input,true);
  var method=id.pathname.substr(1);
  if(method=="add2")
    sum=(add2(id.query)).toString();
  if(method=="accumulate")
    sum=(accumulate(id.query,sum));
  if(method=="reset")
    sum=(reset());
  res.write(sum);	
  res.end();
});
var add2=function(num){
	return (+num.first)+(+num.second);
}
var accumulate=function(num,sum){
	return ((+num.first)+(+sum)).toString();
}
var reset=function(){
  return "0";
}
httpServer.listen(8282, "127.0.0.1");
console.log('Server running at http://localhost:8282/');