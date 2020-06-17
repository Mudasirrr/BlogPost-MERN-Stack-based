const mongoose = require('mongoose');


//Schema
const Schema =mongoose.Schema;
const BlogPOstSchema =new Schema({
    title: String,
    body: String,
    data: {
        type: String,
        default:Date.now
    }

});

//Model
const LearningBlogPost = mongoose.model('BlogPOst', BlogPOstSchema)

module.exports = LearningBlogPost;
