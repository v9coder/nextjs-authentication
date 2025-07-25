import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request : NextRequest) {
    try {
        const reqBody = await request.json();
        const {token} = reqBody;
        console.log(token);
        
        const user = await User.findOne({
            verifyToken : token,
            verifyTokenExpiry : {$gt : Date.now()}
        });

        if(!user){
            return NextResponse.json(
                {
                    error : "Invalid TOKEN",
                    status : 400
                }
            )
        }
        console.log("User NOT Found");

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();
        
        return NextResponse.json({
            message: "Email verified successfully",
            success: true
        })

    } catch (error : any) {
        return NextResponse.json({error : error.message}, {status : 500});
    }
}