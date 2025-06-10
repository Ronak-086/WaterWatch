import e from "express";
import dotenv from "dotenv";
import { connectToDB } from "./src/database/database.js";
import { userRouter } from "./src/routes/user.routes.js";
import { environmentRouter } from "./src/routes/environment.routes.js";
import { waterReadingRouter } from "./src/routes/waterReading.routes.js";
import { recommandationsRouter } from "./src/routes/recommandations.routes.js";
import cors from "cors";
dotenv.config();
//server
const server = e();
//database
connectToDB();
//middleware
server.use(e.json());
server.use(cors());
server.use((req,res,next)=>{
  console.log(req.url);
  next();
})
//routes
server.use("/api/user", userRouter);
server.use("/api/environment", environmentRouter);
server.use("/api/waterReadings", waterReadingRouter);
server.use("/api/recommandations", recommandationsRouter);
server.get("/",(req,res)=>{
  res.send("welcome to water watch api")
})
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log("Server is listening.");
});
