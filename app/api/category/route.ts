import getAll from "@/server/lib/category/getAll";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAll();
  return NextResponse.json(data);
}
