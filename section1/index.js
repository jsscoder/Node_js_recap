console.log("hello world")


for (let i = 0; i < 100; i++) {
  if (i < 50) {
    continue
  } else {
    //console.log("hello world", i)
  }



}


const fetchUser = async (url) => {
  try {
    //const url=""
    const dat = await fetch(`${url} `)
    const data = await dat.json()
    console.log(data)

  } catch (error) {

  }
}

const { asyncWrapProviders } = require('async_hooks')
//fetchUser("https://pokeapi.co/api/v2/pokemon/palkia")
//fetchUser("https://pokeapi.co/api/v2/pokemon/dialga")
//fetchUser()


/// module 
//  built in modules
// 3rd party
// custom module=mere khud ke modules 

// video5
// built in module
// file system 


const fs = require('node:fs') // built in module
console.log(fs)

const content = fs.readFileSync('../motivation.txt', 'utf-8')
console.log(content);
//pandas="Although it's commonly believed that actions speak louder than words, sometimes, nothing can be more soul-stirring and inspirational than a powerful string of words said at the right time. Every time anime characters make their voices truly heard, be it in a motivational speech of encouragement or a heart-wrenching final monologue, their sincere sentiment has an impact both on the audience and those they're addressing. Even those speeches more humorous than serious, like Sakata Gintoki's, are worth remembering."
//const writeFile=fs.writeFileSync("../motivation.txt",pandas)
//console.log("file written success")


// node:fs shoes built in module
const contents = fs.readFileSync("../motivation.txt", "utf-8")
//console.log(contents);
//fs.mkdirSync('games/xyz/a', { recursive: true })
  

//fs.rmdirSync('/xyz')
fs.mkdirSync('ea/contents/battlefiled-6',{recursive:true})


// blocking operation 
// if reafing the file


const hvcodm=fs.readFileSync('./ea/notes.txt',
  'utf-8'
)

