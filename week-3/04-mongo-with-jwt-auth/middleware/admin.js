// import {Admin} from "../db"
// Middleware for handling auth
const jwt = require('jsonwebtoken');
const {secret} = require('../db');

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    
    try{
        const rawtoken = req.headers.authorization;
    // console.log(rawtoken);
    const token = rawtoken.split(" ")
    const decode = jwt.verify(token[1],secret)
    if(decode.username){
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
module.exports = adminMiddleware;