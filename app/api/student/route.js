import { NextResponse } from "next/server";
import { db } from "../../../utils/index.js";
import { STUDENTS } from "@/utils/schema.js"; // Adjust the path to your schema file

export async function POST(req) {
  const data = await req.json();

    const result = await db.insert(STUDENTS).values({
        name: data?.name,
        grade: data?.grade,
        address: data?.address,
        contact: data?.contact,
    });

    return NextResponse.json(result);
}

export async function GET(req) {
  const result = await db.select().from(STUDENTS);
  //console.log(result);
  return NextResponse.json(result);
}