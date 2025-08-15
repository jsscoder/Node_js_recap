import express from "express";
import { Request, Response } from "express";
import { async_handler } from "../utils/async-handler"

/*
export const serverCheck=async(req:Request,res:Response)=>{
  try {
    res.json({
      msg:"server doing alright...."
    })
  } catch (error) {
    console.log(error)
  }
}
  */
const server_check = async_handler(async (req: Request, res: Response) => {
  res.status(200).json({
    msg: "server is working like a charm, you grind, don't slack off idiot — we rain the fire @2025"
  });
});

export { server_check };