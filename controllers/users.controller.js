let users = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

//get user data
let getUser = (req, res)=>{
    res.status(200).json({users});
}
// create user data 
let CreateUser = (req, res)=>{
    const newUser = {
        id: uuidv4,
        username: req.body.username,
        email: req.body.email,
    };
    users.push(newUser);
    // res.status(200).json({
    //     message:"Hello, from post method"
    // });
    res.status(200).json(users);
}
//update user data 
let updateUser = (req, res)=>{
    const userid = req.params.id;
    const {username, email} = req.body;

    users.filter((user) => user.id === userid).map((selectUser)=>{
        selectUser.username = username;
        selectUser.email= email;
    })

    // res.status(200).json({
    //     message: id
    // });

    res.status(200).json(users);
}
//delete user data 
let deleteUser = (req, res)=>{
    const userid = req.params.id;

    users = users.filter((user)=>user.id !== userid);
    res.status(200).json(users);
}


module.exports = {getUser, CreateUser, updateUser, deleteUser};