const express = require("express");
const app = express();

app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(
    cors({
        origin:"*"
    })
)
const PORT = process.env.PORT || 4000;

const dbConnect = require("./config/database");
dbConnect();

//routes
const todoRoutes = require("./Routes/routes");
app.use("/api/v1",todoRoutes);

app.listen(PORT , ()=>{
    console.log(`App is listened at ${PORT}`);
})