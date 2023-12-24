// Middleware for handling auth
const {AdminUser} = require("../db");

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const user = req.headers.username;
    const pass = req.headers.password;

    const exists = await AdminUser.find({
        username:user,
        password:pass
    })

    if(!exists.length){
        res.status(403).json({
            msg : "Admin User does not exist"
        })
    }
    else{
        next()
    }
}

module.exports = adminMiddleware;