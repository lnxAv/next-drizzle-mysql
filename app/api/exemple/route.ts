import getExemple, { ExempleDataType } from "@/server/lib/exemple/getExemple";
import { NextResponse } from "next/server";

// ? == Config ==
// ? https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse<ExempleGetResponse>> {
  try {
    const payload = await getExemple();
    if (!payload) throw new Error("Failed to get payload");
    return NextResponse.json({ payload, server: "success" });
  } catch (error) {
    return NextResponse.json({ payload: null, server: "failed" });
  }
}

export type ExempleGetResponse = {
  payload: ExempleDataType;
  server: "failed" | "success";
};
