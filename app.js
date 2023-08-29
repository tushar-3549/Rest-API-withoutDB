const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// const users = require("./models/user.model");
const userRouter = require("./routes/users.route");
app.use("/users", userRouter);



// home route 
app.get("/", (req, res)=>{
    res.sendFile(__dirname+ "/views/index.html")
})
// if not found 
app.use((req,res,next)=>{
    res.status(404).json({
        message: "Not Found!"
    })
})
// if server error
app.use((req,res,next)=>{
    res.status(500).json({
        message: "Server Error!"
    })
})


module.exports = app;