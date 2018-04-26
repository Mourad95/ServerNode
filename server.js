//import de http
let http = require ("http");

let server = http.createServer();

server.on ('request', (request, response)=>{ //server.on demarrage du server prend 2 para  

    response.writeHead(200, {
    'content-type' : 'text/html; charset=utf-8' //type du contenu: html et utf-8
})
response.end('Salut comment ça va?') 
})

server.listen(8080) //ecoute du server sur le port 8080

