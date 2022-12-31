const http = require('http');
const server = http.createServer((req,res) =>{
   res.setHeader('Content-Type','text/html')
   if(req.url === '/home')
   {
    res.write('<h1>Welcome home</h1>')
   }
   else if(req.url === '/about')
   {
      res.write('<h1>Welcome to about us page</h1>')
   }
   else if(req.url === '/node')
   {
      res.write('<h1>Welcome to my Node project</h1>')
   }
   res.end()
})

server.listen(3000);

