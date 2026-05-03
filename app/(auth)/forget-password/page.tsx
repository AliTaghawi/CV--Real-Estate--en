import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import ForgetPasswordPage from "@/templates/ForgetPasswordPage";

const ForgetPassword = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <ForgetPasswordPage />;
};

export default ForgetPassword;
