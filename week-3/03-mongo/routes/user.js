const { Router } = require("express");
const router = Router();
const bodyParser = require('body-parser');
const userMiddleware = require("../middleware/user");

const {User, Course} = require("../db");

// User Routes

//user singup
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

//get all courses
router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();

    res.status(200).json(courses)
});

//purchase courses
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
        const cid = req.params.courseId;
        const query  = await Course.findOne({id:cid})
        console.log(query.id);
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

//get purchased courses
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username
    const user = await User.findOne({username:username})

    let purchased=[];
    for(let i=0;i<user.courseId.length;i++){
        let cid = user.courseId[i];
        const info  = await Course.findOne({id:cid})
        purchased.push(info)
    }
    res.json(purchased)

});

module.exports = router