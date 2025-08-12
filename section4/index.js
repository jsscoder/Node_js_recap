const db = require("./db/index")
const { usersTable } = require("./drizzle/schema")
require("dotenv/config")

async function getAllUser() {
  const users = await db.select().from(usersTable)
  console.log(`users in db`, users)
  return users
}

async function createUsers({ name, age, email, rank }) {
  await db.insert(usersTable).values({
    name,
    age,
    email,
    rank,
  });
}
//createUsers({ name: "piyush", email: "piyush@example.com", age: 21, rank: "veteran" })
//createUsers({ name: "hitesh", email: "hitesh@example.com", age: 29, rank: "master" })
//createUsers({ name: "omkar", email: "omkar@example.com", age: 21, rank: "legendary" })
getAllUser()