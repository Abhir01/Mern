import express from "express";

//creating app with express obj
const app = express();

//method (port ,callback_func)
//port is the location of our server where we are going to be listening for requests from the client side 
//callback func , that is going to be trigerred when our server is setup , as soon as our app is listening on port 3000 and everything done , then it is going to trigger

// app.get("/",(req,res) => {
//     res.send("hello,world!");
// })

const port = 3000;
app.listen(port, () => {
    console.log('server running on port' + port);
}) 

