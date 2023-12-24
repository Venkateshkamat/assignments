const {User} = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const exists = await User.find({
        username:username,
        password:password
    })

    if(!exists.length){
        return res.status(403).json({
            msg : "User does not exist"
        })
    }
    else{
        next()
    }
}

module.exports = userMiddleware;