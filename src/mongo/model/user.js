import mongoose, { Schema, models }  from "mongoose";
const userschema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
 const User=models.Users||mongoose.model("Users",userschema);
 export default User;
