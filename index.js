const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const Product = require('./models/product.model.js');
const User = require('./models/user.model.js');
const productRoute = require('./routes/product.route.js'); 
const userRoute = require('./routes/user.route.js'); 

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
app.use("/api/userRoute", userRoute);

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

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);
    console.log(myPlaintextPassword);
});

app.post('/api/user',(req,res)=>{
    console.log(req.body);
    try{
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
        console.log(hashedPassword);
        console.log(req.body.password);
        res.status(200).send("User saved Successfully");
    }
    catch(error){
        res.status(500).send("Error Occured User Not Saved");
    }
})