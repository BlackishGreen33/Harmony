import { MemberRole } from '@prisma/client';
import { NextResponse } from 'next/server';

import { currentProfile } from '@/common/libs/current-profile';
import { db } from '@/common/libs/db';

export async function POST(req: Request) {
  try {
    const profile = await currentProfile();
    const { name, type } = await req.json();
    const { searchParams } = new URL(req.url);

    const serverId = searchParams.get('serverId');

    if (!profile) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!serverId) {
      return new NextResponse('Server ID missing', { status: 400 });
    }

    if (name === '一般频道') {
      return new NextResponse("Name cannot be '一般频道'", { status: 400 });
    }

    const server = await db.server.update({
      where: {
        id: serverId,
        members: {
          some: {
            profileId: profile.id,
            role: {
              in: [MemberRole.ADMIN, MemberRole.MODERATOR],
            },
          },
        },
      },
      data: {
        channels: {
          create: {
            profileId: profile.id,
            name,
            type,
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log('CHANNELS_POST', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
