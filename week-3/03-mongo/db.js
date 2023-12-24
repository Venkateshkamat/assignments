const mg = require('mongoose');


mg.connect("mongodb+srv://admin:passwordnotcommon@cluster0.sj6zhoc.mongodb.net/week3_app")

const AdminUser = mg.model('admin_users',{
    username: { type: String, required: true, unique: true }, 
    password: { type: String, required: true}
});

const User = mg.model('users',{
    username: { type: String, required: true, unique: true }, 
    password: { type: String, required: true},
    courseId: {type:[Number], default:[], unique: true}
});

const Course = mg.model('courses',{
    id: { type: Number, required: true, unique: true}, 
    title: { type: String, required: true},
    description: { type: String, required: true}, 
    price: { type: Number, required: true}, 
    imageLink: { type: String, required: true}, 
    published: { type: Boolean, required: true, default: true} 
}); 

module.exports  ={
    AdminUser,
    User,
    Course
}