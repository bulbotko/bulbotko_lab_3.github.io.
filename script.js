const http = require("http");
const fs = require("fs");
 
let button_1, button_2, button_3, button_4;
let panel_1, panel_2, panel_3, panel_4;
http.createServer(function(request, response){

    fs.readFile("files/button_1.txt", "utf8", 
    function(error,data){
        if(error) throw error; 
        button_1 = data;
    }); 
    fs.readFile("files/button_2.txt", "utf8", 
    function(error,data){
        if(error) throw error; 
        button_2 = data;
    });   
    fs.readFile("files/button_3.txt", "utf8", 
    function(error,data){
        if(error) throw error; 
        button_3 = data;
    });   
    fs.readFile("files/button_4.txt", "utf8", 
    function(error,data){
        if(error) throw error; 
        button_4 = data;
    });   

    fs.readFile("files/panel_1.txt", "utf8", 
    function(error,data){
        if(error) throw error; 
        panel_1 = data; 
    }); 
    fs.readFile("files/panel_2.txt", "utf8", 
    function(error,data){
        if(error) throw error; 
        panel_2 = data; 
    }); 
    fs.readFile("files/panel_3.txt", "utf8", 
    function(error,data){
        if(error) throw error; 
        panel_3 = data; 
    }); 
    fs.readFile("files/panel_4.txt", "utf8", 
    function(error,data){
        if(error) throw error; 
        panel_4 = data; 
    }); 
    fs.readFile("page_.html", "utf8", function(error, data){       
        data = data.replace("Section_1", button_1).replace("paragraph_1", panel_1);
        data = data.replace("Section_2", button_2).replace("paragraph_2", panel_2);
        data = data.replace("Section_3", button_3).replace("paragraph_3", panel_3);
        data = data.replace("Section_4", button_4).replace("paragraph_4", panel_4);
        response.end(data);
    })
}).listen(3000);