import Conversations from '@/modules/Conversations';

interface MemberIdPageProps {
  params: Promise<{
    memberId: string;
    serverId: string;
  }>;
  searchParams: Promise<{
    video?: string | string[];
  }>;
}

const Page = async ({ params, searchParams }: MemberIdPageProps) => {
  const [{ memberId, serverId }, { video }] = await Promise.all([
    params,
    searchParams,
  ]);

  return (
    <>
      <Conversations
        memberId={memberId}
        serverId={serverId}
        video={video === 'true'}
      />
    </>
  );
};

export default Page;
