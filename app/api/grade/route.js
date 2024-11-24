import { NextResponse } from "next/server";
import {db} from "../../../utils/index.js";
import { GRADES } from "@/utils/schema.js";

export async function GET(req) {

    const result = await db.select().from(GRADES);
    return NextResponse.json(result);
    
}

// all the grade realted api calls are inside this file