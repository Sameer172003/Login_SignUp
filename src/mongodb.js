const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginSignUp")
.then(()=>{
    console.log("MongoDB Connected");
})
.catch(()=>{
    console.log("Failed to Connect");
});
mongoose.connect('mongodb://localhost:27017/LoginSignUp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000, // 45 seconds
});

mongoose.connect('mongodb://localhost:27017/LoginSignUp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10, // Default is 5
});


const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection=new mongoose.model("Collection1",LoginSchema)
module.exports=collection;