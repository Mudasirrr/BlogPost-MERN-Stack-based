const express = require('express');
const mongoose =require('mongoose');
const morgan =require('morgan'); 
const path = require('path');
// const cors = require('cors');//this is the solution when we pass data from client side to server side
// alternative way to solve this problem is use proxy in client package.json...
const app = express();

//step 1
const PORT =process.env.PORT || 8180;//we use this line because we have to connect app with port, if 8180 is busy then it will take another port process.env..

const routes = require('./routes/Api');

//step 2
//mongoAtlas address of the project cluster
// const MONGODB_URI = 'mongodb+srv://mudasir:mudasir@cluster0-bvjvc.mongodb.net/learningMernBlogPost?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/mern_blogpost',{
    useNewUrlParser: true,
    useUnifiedTopolo: true
});

mongoose.connection.on('connected',()=>{
    console.log('MongoDb is connected...')
})


app.use(express.json());
app.use(express.urlencoded({extended:false}));

//step 3
if (process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'));
}
//http REQUEST LOGGER
app.use(morgan('tiny') );


app.use('/api',routes);
  



app.listen(PORT,console.log(`Server is listening at${PORT}`));