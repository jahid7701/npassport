
import Countrydetail from "@/mongo/model/countrydetails";
import { connectmongodb } from "@/mongo/mongoose";


import { NextResponse } from 'next/server';

export async function POST(req){
    const {states,csta}= await req.json();
    try{   
        await connectmongodb();  
         await Countrydetail.create({states,csta});
        
        
        return NextResponse.json({success:true},{status:201})
    }  
    catch(error){
        return NextResponse.json({message:"user not registered"},{status:500})
    }
}

