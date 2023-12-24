const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {AdminUser, Course} = require("../db");

// Admin Routes

//admin signup
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const user = req.body.username;
    const pass = req.body.password;

    const exists = await AdminUser.find({username:user})

    if(!exists.length){
        const adminuser = new AdminUser ({
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
    
//create courses
router.post('/courses', adminMiddleware, async (req, res) => {
    const {title, description, imageLink,price} = req.body;
    const cid = Math.floor(Math.random()*1000);

    const course = new Course({
        id: cid,
        title: title,
        description: description,
        price:price,
        imageLink: imageLink
    })

    await course.save();
    res.status(200).json({
        message: "Course created successfully",
        courseID: cid
    })

});

//get all courses
router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();

    res.status(200).json(courses)
});

module.exports = router;    