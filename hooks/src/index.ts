import express from "express"
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();
app.post("/hooks/catch/:userId/:zapId", async(req,res)=>{
    const userId = req.params.userId;
    const zapId = req.params.zapId;

    //store in a db a new trigger
    await client.$transaction(async tx =>{
        await client.zapRun.create({
            data: {
                zapId: zapId,
            }
        });
        await client.ZapRun
    })
    
    //push it on to a queue (kafka/redis)
    kafkaPublisher.publish
})