const express = require("express")
const router = express.Router()

const { getVids, getVidsById, createVids, deleteVidsById } = require('../controllers/vids.controller')


// fetch by id
// yt channel hooker
// rest api is stateless
// seamless modern api in array lol

// a custom video to createcool as fuck isnt it
// routes
// get all
router.get("/vids", getVids)



router.get("/vids/:id", getVidsById)


router.post("/vids/create", createVids)

router.delete("/vids/:id", deleteVidsById)

module.exports = router