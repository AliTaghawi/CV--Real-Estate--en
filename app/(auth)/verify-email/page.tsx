import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/api/auth/[...nextauth]/route';
import VerifyEmailPage from '@/templates/VerifyEmailPage';

const VerifyEmail = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
      <VerifyEmailPage />
  );
};

export default VerifyEmail;