const express =require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(uri);
})