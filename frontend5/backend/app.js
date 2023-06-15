const express=require("express");
const app=express();
app.listen(3000);

const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
const cors=require("cors");
app.use(cors());
app.use(express.json());

const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb");
var schema=mongoose.Schema({_id:String,password:String,name:String,role:String});
var User=mongoose.model("user",schema);


app.get("/users",async(req,res)=>{;
    data= await User.find();
    res.json(data);

});


app.post("/users",async(req,res)=>{
    try{
        var r=new User(req.body);
        result=await r.save();

        res.json(result);
    }
    catch(err){
        res.json(err);  }

});