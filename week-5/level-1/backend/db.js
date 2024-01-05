const mg = require('mongoose');

mg.connect("mongodb+srv://admin:verydifferentpassword@cluster0.sj6zhoc.mongodb.net/bcard-app")

const schema = mg.Schema({
    name: String,
    description: String,
    links:{
        linkedin: String,
        twitter: String
    },
    interests:{
        type: [String],
        default: ""
    }
})

const Card = mg.model("Cards",schema)

module.exports = {
    Card
}