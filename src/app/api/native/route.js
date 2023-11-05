
import Nativedetail from "@/mongo/model/native";
import { connectmongodb } from "@/mongo/mongoose";


import { NextResponse } from 'next/server';

export async function POST(req){
    const {pold,pols}= await req.json();
    try{   
        await connectmongodb();  
         await Nativedetail.create({pold,pols});
        
        
        return NextResponse.json({success:true},{status:201})
    }  
    catch(error){
        return NextResponse.json({message:"user not registered"},{status:500})
    }
}

