const express=require("express")
const {connection} =require("./Config/db")
const cors=require("cors")
const app=express()
const {AllRoutes}=require("./Routes/AllRoutes")
app.use(cors(),express.json());
require("dotenv").config()
// const cookieParser=require("cookie-parser")
const port =process.env.PORT || 7500;

app.use("/",AllRoutes)

app.listen(port,async()=>{
    try {
        await connection;
        console.log(`listening on port ${port}`);
        console.log("Connected to DB Success");
      } catch (err) {
        console.log("Failed to connect to DB");
      }
})