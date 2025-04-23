import mongoose from "mongoose";

import User from "@/models/User";

import { connectDB } from "@/libs/mongodb";

import { NextResponse } from "next/server";


export async function GET(request, {params}) {
    await connectDB();
  
    const {username} = await params;
  
    const user = await User.findOne({ username });
  
    return NextResponse.json({
      userFound: !!user,
      user,
    });
  }

export async function PUT(request,{params}){

    const {username,email,password,cover,pp,description,about,year}= await request.json()

    const {id} =params

    await User.findOneAndUpdate({id},{username,email,password,cover,pp,description,about,year} )

    const user= await User.findOne({id})

    return NextResponse.json({
        UserUpdated:true,
user
    })

}


