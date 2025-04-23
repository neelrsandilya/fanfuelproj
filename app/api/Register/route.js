import mongoose from "mongoose";

import User from "@/models/User";

import { connectDB } from "@/libs/mongodb";

import { NextResponse } from "next/server";



export async function POST(request)
{
await connectDB()
console.log("User Created")
const {username,email,password,cover,pp,description,about,year}= await request.json()
// const newUser = new User({username,email,password,cover,pp})

// await newUser.save()
await User.create({username,email,password,cover,pp,description,about,year})

return NextResponse.json({
    success:true,
    message:"User Created"

})
}


export async function GET()
{
await connectDB()


const usersfound= await User.find()

return NextResponse.json({
    success:true,
  usersfound
})
}



