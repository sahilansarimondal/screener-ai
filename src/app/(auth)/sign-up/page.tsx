// app/signup/page.jsx
import SignUpForm from "@/components/auth/signup-form";

export const metadata = {
  title: "Sign Up",
  description: "Create a new account",
};

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
