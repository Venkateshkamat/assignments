
const jwt = require('jsonwebtoken');
const {secret} = require('../db');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    
    try{
        const rawtoken = req.headers.authorization;
    // console.log(rawtoken);
    const token = rawtoken.split(" ")
        const decode = jwt.verify(token[1],secret)
    if(decode.username){
        req.headers.username  = decode.username;
        next()

    }
    else{
        res.json({
            Msg: "false Token"
        })
    }}
    catch(err){
        res.status(403).json({
            err
        })
    }
}

module.exports = userMiddleware;