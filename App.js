const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
   res.setHeader('Content-Type','text/html')
   if(req.url === '/')
   {
      fs.readFile('message.txt', {encoding: 'utf-8'} ,(err,data) => {
         if(err){
            console.log(err)
         }
      console.log(data)
    res.write(`<p>${data}<p>`)

    res.write('<form action="/message"method="POST"><input type="text" name="message" /><button type="submit">Send</button></form>') 
    return res.end()
   })
   }
   if(req.url === '/message' && req.method === 'POST'){
      const body = [];
      req.on('data', (chunk) => {
         body.push(chunk)
      })
      return req.on('end', () => {
         const parsedBody = Buffer.concat(body).toString();
         const message = parsedBody.split('=')[1];
         fs.writeFileSync('message.txt', message);
         res.statusCode=302;
         res.setHeader('Location', '/')
         return res.end()
      }) 
   }
   res.end()   
})

server.listen(3000);

