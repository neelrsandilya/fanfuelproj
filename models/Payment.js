import mongoose, { Schema } from "mongoose";



const PaymentSchema= new mongoose.Schema({

    name:{type:String,required:true},
to_user:{type:String,required:true},
oid:{type:String,required:true},
message:{type:String},
amount:{type:Number,required:true},
createdAt:{type:Date, default: Date.now},
updatedAt:{type:Date, default: Date.now},
success:{type:Boolean,default:false},
});


const Payment= mongoose.models.Payment || mongoose.model("Payment", PaymentSchema)

export default Payment

