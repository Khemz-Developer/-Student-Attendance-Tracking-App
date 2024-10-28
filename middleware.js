import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const { isAuthenticated } = getKindeServerSession();
  console.log("Middleware executed");

  if (!(await isAuthenticated())) {
    console.log("User is not authenticated, redirecting to login");
    return NextResponse.redirect(new URL("/api/auth/login?post_login_redirect_url=/dashboard", request.url));
  }

  console.log("User is authenticated, allowing access");
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};

// import { NextResponse } from "next/server";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// export async function middleware(request) {
//   const session = await getKindeServerSession();
//   console.log("Middleware executed");

//   // Log the session to inspect its structure
//   console.log("Session object:", session);

//   // Check if isAuthenticated is a function or a property
//   const isAuthenticated = typeof session?.isAuthenticated === 'function' ? await session.isAuthenticated() : session?.isAuthenticated;
  
//   if (!isAuthenticated) {
//     console.log("User is not authenticated, redirecting to login");
//     return NextResponse.redirect(new URL("/api/auth/login?post_login_redirect_url=/dashboard", request.url));
//   }

//   console.log("User is authenticated, allowing access");
//   return NextResponse.next();
// }

// // Matching paths configuration
// export const config = {
//   matcher: "/dashboard/:path*",
// };
