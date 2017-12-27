//Used to display an html page 

//"Importing" functionalities of http to be used
var http = require('http');

//Creating an object to access server file system
var fs = require('fs');

function onRequest(request,response){

response.writeHead(200, {'Content-Type' : 'text/html'});
//Reading file of specific html webpage to grab and display it
//Parameter:

//1) Path of the html file
//2) options
//3) callback 
fs.readFile('./index.html', null, function(error,data){
	if(error){
			response.writeHead(404);
			response.write("File not Found");
	}else{
		//outputs the actual page
		response.write(data);
	}

response.end();
});




}



//Creates the server on port 8000
//Any request is handled by function onRequest
http.createServer(onRequest).listen(8000);







