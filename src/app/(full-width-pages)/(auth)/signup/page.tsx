import SignUpForm from "@/components/auth/SignUpForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Registro");

export default function SignUp() {
  return <SignUpForm />;
}
