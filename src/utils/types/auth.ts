// types/auth.ts
export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthFormProps {
  isLoading: boolean;
  onSubmit: (event: React.FormEvent) => void;
}
