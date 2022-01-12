const http = require("http");
const fs = require("fs");
 
let button;
http.createServer(function(request, response){

    fs.readFile("hello.txt", "utf8", 
    function(error,data){
        console.log("Асинхронное чтение файла");
        if(error) throw error; 
        button = data;
        console.log(data); 
    });  
    fs.readFile("page.html", "utf8", function(error, data){       
        let message_1 = button; 
        let header_1 = "Nazar";
        data = data.replace("Section_1", message_1).replace("paragraph_1", header_1);
        response.end(data);
    })
}).listen(3000);