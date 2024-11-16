const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js'); 
const cors = require('cors');
require('dotenv').config();
const app = express();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Allow requests from your frontend's origin
app.use(cors({ origin: process.env.FRONTEND_URL }));

//routes
app.use("/api/products", productRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Succesfully");
    })
    .catch(() => {
        console.log("MongoDB Connection Failed");
    })

app.get('/', (req, res) => {
    res.send("Hello world! from NODE API");
});


app.post('/api/upload',upload.single('file'), (req,res)=>{
    console.log("File uploaded");
    res.status(200).json({ message: "File uploaded successfully", file: req.file });
});

