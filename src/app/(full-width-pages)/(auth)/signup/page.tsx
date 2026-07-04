import SignUpForm from "@/components/auth/SignUpForm";
import { generateAdminPageMetadata } from "@/lib/admin-page";

export async function generateMetadata() {
  return generateAdminPageMetadata("signUp");
}

export default function SignUp() {
  return <SignUpForm />;
}
