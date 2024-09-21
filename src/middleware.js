import { WaptchaSDK } from "waptcha-sdk"
import { NextResponse } from "next/server"

export async function middleware(request) {
  // Add Waptcha with just 2 lines of code
  const waptcha = new WaptchaSDK(process.env.WAPTCHA_URL, process.env.WAPTCHA_ID)
  const isVerified = await waptcha.verify()

  if (!isVerified) return Response.redirect(waptcha.getWaptchaVerifyUrl())

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
