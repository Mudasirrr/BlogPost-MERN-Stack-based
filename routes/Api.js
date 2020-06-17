const express = require('express');
const router = express.Router();


const LearningBlogPost = require('../models/LearningBlogPost');
//Routs
router.get('/',(req,res)=>{
    const data ={
        username: 'Mudasir Hussain',
        age: 23
    };
    LearningBlogPost.find({})
    .then((data)=>{
        console.log("Data",data)
        res.json(data)
    })
    .catch((error)=>{
        console.log("error",error)

    })
});
router.get('/name',(req,res)=>{
    const data ={
        username: 'Ansa Amjad',
        age: 23
    };
    res.json(data);
});

//POst routes...........
router.post('/save',(req,res)=>{
    console.log('Body:',req.body);
    const data=req.body;
    const newLearningBlogPost= new LearningBlogPost(data);

    //.save
    newLearningBlogPost.save((error)=>{
        if (error){
            res.status(500).json({msg: 'Sorry, internal server error'});
        } else {
            //BlogPOst
            res.json({
                msg:'Your data has been saved!!!!!'
                    });
                }
    });

});


//POst routes...........
// router.post('/save',(req,res)=>{
//     console.log('Body:',req.body);
//     res.json({
//         msg:'we received your data!!!!!'
//     })
// });
module.exports = router ;