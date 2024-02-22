// in node js we have to create our server manuallly, we don't have other features or packages that helps us in doing that...

// we create a server with the help of a 'http' module of node js

// clients vs servers

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request made successfully')
})

server.listen(3000, "localhost", () => {
  console.log("server running and listening on port 3000");
});

