

import User from "@/mongo/model/user";
import { connectmongodb } from "@/mongo/mongoose";


import { NextResponse } from 'next/server';

export async function POST(req){
    const {email,password}= await req.json();
    try{   
        await connectmongodb();  
         await User.create({email,password});
        
        
        return NextResponse.json({success:true},{status:201})
    }  
    catch(error){
        return NextResponse.json({message:"user not registered"},{status:500})
    }
}

