import { authMiddleware } from "@clerk/nextjs"; 
export default authMiddleware({
      // Ensure that locale specific sign-in pages are public
  publicRoutes: ["/", "/profile/:slug","/:locale/sign-in"],
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};