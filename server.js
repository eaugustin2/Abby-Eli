//Used to handle webpage requests

//"Importing" http functionalities to use
var http = require('http');

function onRequest(request,response){

//Sets the type of the response that will be outputted to webpage
response.writeHead(200, {'Content-Type' : 'text/plain'});

//Actual output to the webpage based on parameters
response.write("Hello World");

//To end the responses
response.end();
}


//Creating a server on port 8000
//Will go to onRequest to handle webpage requests
http.createServer(onRequest).listen(8000);
