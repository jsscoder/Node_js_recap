const { error } = require('console')
const express = require('express')
const app = express()
const port = 8000
const fs = require('node:fs')
const videoRouter = require("./routes/vids.route")
const logger = require('./middlewares/middleware')

// middleware(plugins)
app.use(express.json())


/* middleware A
app.use(function (req, res, next) {
 // logic
//logger in file
const log=`\n${Date.now().toLocaleString('en-GB')} ${req.method} ${req.path}`
fs.appendFileSync('log.txt',log,'utf-8')
next()
})

*/

app.use(logger);

app.use("/vids/v1", videoRouter)

// routes specific middleware 
// routers middleware

app.listen(port, () => {
  console.log(`server listening port on ${port}.... `)
})






//ignore trash code here

/*
const fetchPokemon = async (url) => {
  try {
    //const url = ""
    const data = await fetch(` ${url}`)
    const data_json = await data.json()
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}
fetchPokemon(" https://pokeapi.co/api/v2/pokemon/palkia")

*/