import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log("call backend:", req);
  return NextResponse.json([
    { id: "1", name: "Category 1" },
    { id: "2", name: "Category 2" },
    { id: "3", name: "Category 3" },
  ]);
}
