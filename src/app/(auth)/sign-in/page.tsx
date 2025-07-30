// app/signin/page.jsx
import SignInForm from "@/components/auth/signin-form";

export const metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <SignInForm />
    </div>
  );
};

export default SignInPage;
