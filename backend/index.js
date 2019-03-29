var express =require('express');
const app = express();
const mongoose=require('mongoose');
const config = require('../config/database');
const path = require('path');
var authent= require('./routes/authentification.js');
const bodyParser= require('body-parser');
const cors= require('cors'); 

mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err) => {
    if (err){
        console.log('Could not connect to db',err);
    }else{
        console.log('Connected to : '+  config.db);
    }
});


app.use(cors({
    origin:'http://localhost:4200'
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static( '../Project/dist/'));
app.use('/authentification',authent);
app.get('/',(req,res) => {
    res.send('hello');
});
app.listen(8080, () =>{
    console.log('Server listening on port 8080');
});