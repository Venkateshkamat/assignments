const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course, secret} = require('../db');
const jwt = require('jsonwebtoken');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const exists = await User.find({username:username})

    if(!exists.length){
        const user = new User ({
            username:username,
            password: password
        })
    
        await user.save();
        res.status(200).json({
            message: "User created successfully'"
        })
    }
    else{
        res.status(404).send("User already exists")
    }
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username  = req.body.username;
    const password  = req.body.password;
    const exists = await User.find({username:username,password:password});
    if(exists.length){
        const token = jwt.sign({username,password},secret);
        res.json({
            token
        })
    }
    else{
        res.json({
            msg: "Incorrect credentials"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();

    res.status(200).json(courses)
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
        const cid = req.params.courseId;
        const query  = await Course.findOne({_id:cid})
        if(query==null){
            res.status(404).json("ID not found");            
        }
        else{
            const exists = await User.exists({courseId:cid})
            if(!exists){
            await User.updateOne({username :req.headers.username},{$push: {courseId: cid}})
            
            
            res.json({
                message: "Course purchased successfully"
            })
            }
            else{
                return res.status(404).json({
                    Message: "Already Purchased"
                })
            }
        }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    let courses = [];
    const user = await User.findOne({username:username});
    for(let i=0;i<user.courseId.length;i++){
        const course = await Course.find({_id:user.courseId[i]});
        courses.push(course)
    }
    res.json(courses)
});

module.exports = router