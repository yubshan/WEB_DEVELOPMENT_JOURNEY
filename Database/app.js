const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./usermodel");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/" , (req , res) =>{
    res.render("index");
});
app.get("/read" , async (req , res) =>{
    let userdetails =  await userModel.find();
    res.render("read" , {users : userdetails});
});
app.get("/edit/:id" , async (req , res) =>{
    // let userUpdated= await userModel.findOneAndUpdate({_id : req.params.id} );
    let userdetails =  await userModel.findOne({_id:req.params.id});
    res.render("edit" , {user : userdetails});
    // res.send(userUpdated);
});
app.get("/delete/:id" , async (req , res) =>{
    let userDeleted= await userModel.findOneAndDelete({_id : req.params.id});
    res.redirect("/read");
});

app.post("/create" , async (req , res) =>{
    let {name , email, imageUrl} = req.body;
    let userCreated = await userModel.create({
        name: name,
        imageUrl:imageUrl,
        email:email
    });
    res.redirect("/read");
});
app.post("/edit/:id" , async (req , res) =>{
    let {name , email, imageUrl} = req.body;

  let userUpdatedValue = await userModel.findOneAndUpdate({_id : req.params.id}, { name : name , email : email, imageUrl : imageUrl}, {new:true});
   
    res.redirect("/read");
});
app.listen(3000);