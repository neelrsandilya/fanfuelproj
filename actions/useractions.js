"use server"
import Payment from "@/models/Payment"
import { connectDB } from "@/libs/mongodb"
import Razorpay from "razorpay"



export const initiate= async(amount,to_user,paymentform)=>{

    await connectDB()
    console.log(to_user)
    var instance = new Razorpay({   key_id: process.env.RZP_KEY_ID,
        key_secret: process.env.RZP_KEY_SECRET,})


    let options= {
        amount:Number.parseInt(amount),
        currency:"INR"
            }

console.log(options)
let x= await instance.orders.create(options)

console.log(x)

await Payment.create({oid:x.id,to_user:to_user,amount:Number.parseInt(amount),name:paymentform.name,message:paymentform.message})


return x
}
