const mongoose = require('mongoose');

const secret = "password";



// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:hahanopeeping@cluster0.sj6zhoc.mongodb.net/week3_1_app');


// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here

    username: { type: String, required: true, unique: true }, 
    password: { type: String, required: true}
});

const UserSchema = new mongoose.Schema({
    // Schema definition here

    username: { type: String, required: true, unique: true }, 
    password: { type: String, required: true},
    courseId: {type:[Object], default:[], unique: true}
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here 
    title: { type: String, required: true},
    description: { type: String, required: true}, 
    price: { type: Number, required: true}, 
    imageLink: { type: String, required: true}, 
    published: { type: Boolean, required: true, default: true}
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
    secret
}