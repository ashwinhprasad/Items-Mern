const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const app = express();





//bodyparser middleware
app.use(bodyParser.json());


//DB config
const db = require('./config/keys').mongoURI;


//connect to mongoDB
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected...'))
    .catch((err) => console.log(err))

const port = process.env.PORT || 5000;

//use Routes
app.use('/api/items',items);



app.listen(port,() => console.log(`Listening to port ${port}`))