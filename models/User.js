import mongoose, { Schema } from "mongoose";


const UserSchema= new mongoose.Schema({
    username:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
cover:{type:String,required:true},
pp:{type:String,required:true},
description:{type:String,required:true},
about:{type:String,required:true},
year:{type:String,required:true},


})


const User= mongoose.models.User || mongoose.model("User", UserSchema)

export default User

