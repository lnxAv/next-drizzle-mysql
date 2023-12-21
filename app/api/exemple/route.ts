import getExemple, { ExempleDataType } from "@/database/lib/exemple/getExemple";
import { NextResponse } from "next/server";

// ? == Config ==
// ? https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse<ExempleGetResponse>> {
  try {
    const payload = await getExemple();
    if (!payload) throw new Error("failed");
    return NextResponse.json({ payload, server: "success" });
  } catch (error) {
    // ? The connection failed, read README.md for more information
    return NextResponse.json({ payload: null, server: "failed" });
  }
}

export type ExempleGetResponse = {
  payload: ExempleDataType;
  server: "failed" | "success";
};
