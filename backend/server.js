const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const News = require('./model/news.models');
const { async } = require('rxjs');

const app = express();
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/ecotopia');

// CORS Middleware
app.use(cors());

app.get('/', async(req, res) =>{
    try{
        const news = await News.find();
        res.json(news);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error'});
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`) // REMOVE THIS LINE IN PROD
})