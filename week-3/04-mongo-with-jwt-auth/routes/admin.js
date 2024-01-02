const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, secret,Course} = require('../db');
const jwt = require('jsonwebtoken');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const user = req.body.username;
    const pass = req.body.password;

    const exists = await Admin.find({username:user})

    if(!exists.length){
        const adminuser = new Admin ({
            username:user,
            password: pass
        })
    
        await adminuser.save();
        res.status(200).json({
            message: "Admin created successfully'"
        })
    }
    else{
        res.status(404).send("User already exists")
    }       
        
})

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const user = req.body.username;
    const pass = req.body.password;

    const exists = await Admin.find({
        username:user,
        password:pass
    })

    if(!exists.length){
        res.status(403).json({
            msg : "Admin User does not exist"
        })
    }
    else{
        const token =  jwt.sign({username:user, password:pass},secret)
        res.json({
            token : token
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description, imageLink,price} = req.body;

    const course = new Course({
        title: title,
        description: description,
        price:price,
        imageLink: imageLink
    })

    const saved = await course.save();
    res.status(200).json({
        message: "Course created successfully",
        id:saved._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();

    res.status(200).json(courses)
});

module.exports = router;