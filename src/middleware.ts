import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { config as appConfig } from "@/config";

const I18nMiddleware = createI18nMiddleware({
  locales: [appConfig.DEFAULT_LOCALE, "ar"],
  defaultLocale: appConfig.DEFAULT_LOCALE,
  resolveLocaleFromRequest: () => appConfig.DEFAULT_LOCALE,
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
