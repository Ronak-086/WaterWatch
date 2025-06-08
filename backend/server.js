import e from "express";
import dotenv from "dotenv";
import { connectToDB } from "./src/database/database.js";
import { userRouter } from "./src/routes/user.routes.js";
import { environmentRouter } from "./src/routes/environment.routes.js";
import { waterReadingRouter } from "./src/routes/waterReading.routes.js";
import { recommandationsRouter } from "./src/routes/recommandations.routes.js";
dotenv.config();
//server
const server = e();
//database
connectToDB();
//middleware
server.use(e.json());
//routes
server.use("/user", userRouter);
server.use("/environment", environmentRouter);
server.use("/waterReadings", waterReadingRouter);
server.use("/recommandations", recommandationsRouter);
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log("Server is listening.");
});
