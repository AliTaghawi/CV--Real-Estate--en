import { authOptions } from "@/api/auth/[...nextauth]/route";
import LoginPage from "@/templates/LoginPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// export const dynamic = 'force-static'

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <LoginPage />;
};

export default Login;
