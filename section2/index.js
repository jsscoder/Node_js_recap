const http = require('node:http')
const PORT = 3000
//basic server in http
const server = http.createServer(function (req, res) {


  console.log(`request logged success ${Date.now()}`)
  console.log(req.method)
  console.log(req.url)
  const baklol = "chal nikl yaha se ben stokes!!!!!!"
  const randomizer = Math.floor(Math.random() *100/10)
  console.log(randomizer)
  const pokemon_random = () => {
    return `your favourite pokemon number is:=${randomizer}`
  }
  switch (req.url) {

    case '/':
      return res.end('homepage')
    case '/contact':
      return res.end('contact-page')
    case '/about':
      return res.end('about-page')
    case '/about':
      return res.end()
    case '/pokemon':
      return res.end(`your favourite pokemon number is ${pokemon_random()}`)

    default:
      return res.end('<h1>404 page error finding that page </h1>')
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