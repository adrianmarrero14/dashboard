import SignInForm from "@/components/auth/SignInForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Iniciar sesión");

export default function SignIn() {
  return <SignInForm />;
}
