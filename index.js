const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model.js")
const productRoute = require("./routes/product.route.js")
const app = express()




//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/products",productRoute)






app.get('/', (req, res) => {
    res.send('Hello from Node API Server Updated');
});






mongoose.connect("mongodb+srv://username:Ipassword@firstbackend.hsjsn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=FirstBackend")
    .then(() => {
        console.log("Connected to Mongo Db");
        app.listen(8000, () => {
            console.log("Server is running on port 8000");
        })

    })
    .catch(() => {
        console.log("Connection Failed")
    })
