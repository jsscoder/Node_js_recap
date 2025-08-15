import express from "express"
import { server_check } from "../controllers/server-check"
server_check
const router = express.Router()

router.route("/").get(server_check)

export default router