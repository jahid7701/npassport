import { connectmongodb } from "@/mongo/mongoose";
import { NextResponse } from "next/server"

export async function GET(){
    try{
        await connectmongodb();
return NextResponse.json({success:true},{status:201})
    }
    catch(error){
    return NextResponse.json({message:"user not found"},{status:500})
    }
}