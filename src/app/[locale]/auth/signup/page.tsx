import AuthPageLayout from "@/features/Auth/components/AuthPageLayout";
import SignupForm from "@/features/Auth/components/SignupForm";
import { authPageMetaData } from "@/features/Auth/lib/seo/authPageMeta";

export const generateMetadata = (props: any) =>
  authPageMetaData({ ...props, type: "signup" });
const SignUp = () => {
  return (
    <AuthPageLayout>
      <SignupForm />
    </AuthPageLayout>
  );
};

export default SignUp;
