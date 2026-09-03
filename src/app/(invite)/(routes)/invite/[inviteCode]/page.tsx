import Invite from '@/modules/Invite';

interface InviteCodePageProps {
  params: Promise<{
    inviteCode: string;
  }>;
}

const Page = async ({ params }: InviteCodePageProps) => {
  const { inviteCode } = await params;

  return (
    <>
      <Invite inviteCode={inviteCode} />
    </>
  );
};

export default Page;
