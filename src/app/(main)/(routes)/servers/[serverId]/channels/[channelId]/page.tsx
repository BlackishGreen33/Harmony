import Channels from '@/modules/Channels';

interface ChannelIdPageProps {
  params: Promise<{
    serverId: string;
    channelId: string;
  }>;
}

const Page = async ({ params }: ChannelIdPageProps) => {
  const { serverId, channelId } = await params;

  return (
    <>
      <Channels serverId={serverId} channelId={channelId} />
    </>
  );
};

export default Page;
