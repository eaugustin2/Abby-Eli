//Targeting different routes/Webpages a user may go

var http = require('http');

var fs = require('fs');

var url = require('url');

function handleRequest (request,response){

//Declare type of response
response.writeHead(200, {'Create-Type' : 'text/html'});

var path = url.parse(request.url).pathname;

//Switch case depending on path/page
switch(path){

	case '/':
		renderHTML('./index.html',response);
		break;

	case '/second':
		renderHTML('./SecondPage.html', response);
		break;

	default:
		response.writeHead(404);
		response.write('Route not Found!');
		response.end();
	}


}

//Creates the server on port 8000
//Goes to handleRequest to handle request
http.createServer(handleRequest).listen(8000);

function renderHTML(path,response){
	fs.readFile(path, null, function(error, data){
		if(error){
				response.writeHead(404);
				response.write('Page not Found! for renderHTML');
		}else{
			response.write(data);
		}

		response.end();

	});


}