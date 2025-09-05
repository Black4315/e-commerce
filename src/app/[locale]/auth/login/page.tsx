import AuthPageLayout from "@/features/Auth/components/AuthPageLayout";
import LoginForm from "@/features/Auth/components/loginForm";
import { authPageMetaData } from "@/features/Auth/lib/seo/authPageMeta";

export const generateMetadata = (props: any) =>
  authPageMetaData({ ...props, type: "login" });
const login = () => {
  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  );
};

export default login;
