import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
import router from "./routes/index.js";
import Address from "./models/AddressModel.js";
import { Sequelize } from "sequelize";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log('Database Connected...');
  // await db.sync({alter:true});
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server Running at Port 5000"));
