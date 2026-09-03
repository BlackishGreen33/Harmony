import Servers from '@/modules/Servers';

interface ServerIdPageProps {
  params: Promise<{
    serverId: string;
  }>;
}

const Page = async ({ params }: ServerIdPageProps) => {
  const { serverId } = await params;

  return (
    <>
      <Servers serverId={serverId} />
    </>
  );
};

export default Page;
