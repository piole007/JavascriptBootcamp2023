import mongoose from "mongoose";
import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3000;

app.use(express.json());

const connectionToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://viola:pumpure@cluster0.ekcexrc.mongodb.net/"
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

app.use("/user", userRoute);

app.listen(port, () => {
  connectionToDB();
  console.log(`Server started on port: ${port}`);
});
