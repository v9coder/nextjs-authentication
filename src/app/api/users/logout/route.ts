// here we are just removing the cookies that we have used during login - i.e., we are just setting the expiry of the cookies to 0.
// there is an another method too - we can use POST request to idk what?

import { NextResponse } from "next/server";

export async function GET() {

    try {
        
        const response = NextResponse.json(
            {
                message : "Logout Successful",
                status : true
            }
        )

        response.cookies.set("token" , "", {httpOnly : true, expires : new Date(0)});

        return response;

    } catch (error : any) {
        return NextResponse.json(
            {error : error.message},
            {status : 500}
        )
        
    }
    
}