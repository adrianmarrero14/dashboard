import SignInForm from "@/components/auth/SignInForm";
import { generateAdminPageMetadata } from "@/lib/admin-page";

export async function generateMetadata() {
  return generateAdminPageMetadata("signIn");
}

export default function SignIn() {
  return <SignInForm />;
}
