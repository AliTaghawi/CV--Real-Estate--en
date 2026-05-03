import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import RegisterPage from "@/templates/RegisterPage";

const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <RegisterPage />;
};

export default Register;
