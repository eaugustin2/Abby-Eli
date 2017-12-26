//To "import" http functionalities
var http = require('http');


//Function to handle incoming requests
//Sets a type for response
//outputs a response
//ends response outputs
function onRequest(request, response){
response.writeHead(200, {'Content-Type' : 'text/plain'});
response.write("Hello World");
response.end();
}

//Creates a server to listen on port 8000
//Handles any requests coming through this port
http.createServer(onRequest).listen(8000);