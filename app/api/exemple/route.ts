import getExemple, { ExempleDataType } from "@/database/lib/exemple/getExemple";
import { NextResponse } from "next/server";

// ? == Config ==
// ? https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse<ExempleGetResponse>> {
  let payload: ExempleDataType = null;
  try {
    payload = await getExemple();
    if (payload === null) throw new Error("failed");
    return NextResponse.json({ payload, server: "success" });
  } catch (error: any) {
    if (payload === null) {
      // ? Congrats, you've found a bug in the code!
      // ? This error is thrown when the database connection fails.
      return NextResponse.json({ payload: null, server: "failed", error });
    }
    // ? Congrats, you've found a bug in the code!
    // ? This error is thrown when the database worked, but something else went wrong.
    return NextResponse.json({ payload: null, server: "success", error });
  }
}

export type ExempleGetResponse = {
  payload: ExempleDataType;
  server: "failed" | "success";
  error?: unknown;
};
