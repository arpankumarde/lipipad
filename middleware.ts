import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Auth check for dashboard and secure routes
  if (
    pathname.startsWith("/dashboard")
  ) {
    const response = await updateSession(request);
    const supabase = response.cookies.getAll();

    // Check if user is signed in
    const {
      data: { user },
    } = await (response as any).supabase.auth.getUser();

    // If no user and on a protected route, redirect to login
    if (!user && pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    // If user is signed in and trying to access auth pages, redirect to dashboard
    if (user && (pathname.startsWith("/auth/login") || pathname.startsWith("/auth/signup"))) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return response;
  }

  return NextResponse.next();
}
