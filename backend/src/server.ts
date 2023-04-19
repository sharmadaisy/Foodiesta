import express from "express";
import dotenv from 'dotenv'
import cors from "cors";
import foodRouter from './routers/food.router'
import userRouter from './routers/user.router'
import { dbConnect } from "./configs/database.config";
import orderRouter from './routers/order.router';

dotenv.config()
dbConnect()

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter)

app.use("/api/users", userRouter)

app.use("/api/orders", orderRouter);

const port = 5000;
app.listen(port, () => {
    console.log("Website served on port " + port)
})