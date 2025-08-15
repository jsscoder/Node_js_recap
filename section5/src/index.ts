import express, { Request, Response,NextFunction } from "express";
import "dotenv/config";
import { ConnectDb } from "./db/db";
const app = express();
const port = process.env.PORT
import server_router from "./routes/server-check.route"
app.use(express.static("public"))
app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}))

// Error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});



app.use(express.json({
  limit: "16kb"
}))

app.use("/server-check/v1",server_router)

//  cors config
// pls pull request me i will accept the best one..(:

// async method
const connectServer = async () => {
  try {
    //await ConnectDb()
    app.listen(port, () => {
      console.log(`Example app listening on port ${port} 🖥️ </> 👩🏻‍💻 💾.................`);
    });

  } catch (error) {
    console.log("error connection to server!!!!!")
  }
}



app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});



connectServer()