const {videosTable}=require('./drizzle/schema')
const db=require('./db/vids')

// removing aary based chnages to drizzle postgres

const vids=require('../db/vids')
const getVids=(req, res) => {
  res.json(vids).status(200)
}
const getVidsById=(req, res) => {
  const id = parseInt(req.params.id)
  const find_vid = vids.find((e) => e.id === id)
  // select * from vids where id={id}
  if (isNaN(id)) {
    return res.status(400).json({
      error: `The provided ${id} is not a  valid id type expected number`
    })
  }
  if (!find_vid)
    return res.status(404).json({
      error: `Video with id ${id} does not exist please check again...`
    })


  return res.status(200).json(find_vid)

  //res.json(vids).status(200)
  }
const createVids= (req, res) => {
  const { title, yt_channel } = req.body
  if (!title || title === '' || !yt_channel || yt_channel === '') {
    return res.json({
      error: 'title and yt_channel is required for video regsitration...'
    }).status(400)
  }
  const video = { id: vids.length + 1, title, yt_channel }
  vids.push(video)
  return res.json({
    msg: "video regsitration is success",
    id: vids.length
  }).status(201)


}

const deleteVidsById= (req, res) => {
  const id = parseInt(req.params.id)

  if (isNaN(id)){
    return res.status(400).json({
      error: "id must be there type of number"
    })
  }

  const indexToDelete = vids.findIndex(e => e.id === id)

  if (indexToDelete < 0){
    return res.status(404)
      .json({
        msg: `vid with $id} does not exist`
      })
    }

  vids.splice(indexToDelete, 1)

  return res.json(200).json({
    msg: "vid deleted"
  })
}




module.exports={getVids,getVidsById,createVids,deleteVidsById}
