import { getDateToken } from "@/helpers/dataToken";
import { NextRequest,NextResponse } from "next/server";
import {connect} from '@/dbConfig/dbConfig'

import User from "@/models/userModel";
import axios from "axios";

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = await getDateToken(request)
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            message: "user found",
            data: user
        })
        
    } catch (error:any) {
        return NextResponse.json({error: error.message})
        
    }
}