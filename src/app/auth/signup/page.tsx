import { AuthForm } from "@/components/auth/auth-form";
import { LipipadLogo } from "@/components/lipipad-logo";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-8 left-8 md:top-8 md:left-8 flex items-center text-lg font-semibold"
      >
        <LipipadLogo className="mr-2 h-6 w-6" />
        <span>LipiPad</span>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>
        <AuthForm mode="signup" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/auth/login"
            className="hover:text-brand underline underline-offset-4"
          >
            Already have an account? Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
