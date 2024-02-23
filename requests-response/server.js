// in node js we have to create our server manuallly, we don't have other features or packages that helps us in doing that...

// we create a server with the help of a 'http' module of node js

// clients vs servers

// status codes
// most or commonly used are:

/**
 * 200  -> means that everything is okay with the request
 *
 * 301 -> this shows that something was permanently removed and is used to signify a redirect
 *
 * 404 -> it means that the file was not found
 *
 * 500 -> some kind of an internal server error
 */

// status code ranges:

/**
 * 100 range -> these are informational codes
 *
 * 200 range -> these are success codes
 *
 * 300 range -> codes for redirects
 *
 * 400 range -> user or client error codes
 *
 * 500 range -> server error codes
 *
 */

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // set headers
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      res.write(err.message);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000);
