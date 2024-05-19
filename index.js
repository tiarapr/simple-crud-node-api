const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes 
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Hello from Node API Server Updated');
});

mongoose.connect('mongodb+srv://tiarapr:Rqz8YDGFQHjD19WJ@deployments.azhmqxc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Deployments')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log('Connection failed');
})