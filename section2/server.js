const http = require('node:http')
const PORT = 4000
const fs = require('node:fs')

//basic server in http
const server = http.createServer(function (req, res) {

  const path = req.url;
  const method = req.method

  const log = `\n${Date.now()}: ${path} ${method}`
  fs.appendFileSync('log.txt', log, 'utf-8')
  /*
    console.log(`request logged success ${Date.now()}`)
    console.log(req.method)
    console.log(req.url)
    const baklol = "chal nikl yaha se ben stokes!!!!!!"
    const randomizer = Math.floor(Math.random() *100/10)
    console.log(randomizer)
    const pokemon_random = () => {
      return `your favourite pokemon number is:=${randomizer}`
    
      }
      */
  switch (method) {
    case 'GET':
      switch (path) {

        case '/home':
          return res.end('hello server!!!')
        case '/contact-us':
          return res.end("email:asomkarsuper@gmail.com, \n ph-no:870034555")

        default:
          res.end("404 page not found fucking get the hell out of here u n igga")
      }
      switch (method) {
        case POST:
          switch (path) {
            case '/tweet':
              return res.end("acknowlegedment received!!!")
              res.statusCode = 200

            case '/tweet':
              res.statusCode = 201
              console.log("sending the tweets from the users to the database!!!")
          }


      }
  }



  res.writeHead(200, { 'Content-Type': 'application/json/html' })

  res.statusCode = 200
  //middleware()
  res.end("Thanks for visiting my server (:")
})
/*
const middleware=((req,res,next))=>{
console.log(`${req.url} ${req.method}${req.body}`)
}
*/
server.listen(PORT, () => {
  console.log(`server listeing on port ${PORT}`);

})