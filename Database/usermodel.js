const mongooes = require("mongoose");


mongooes.connect("mongodb://127.0.0.1:27017/mongopractice");

const userSchema = mongooes.Schema({
    name: String,
    imageUrl: String,
    email: String
});


module.exports =  mongooes.model("user", userSchema);
