import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

// ? == NOTE ==
// ? https://next-international.vercel.app/docs/app-setup for more details
const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "fr",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
