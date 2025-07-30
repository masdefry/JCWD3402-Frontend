import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Backendless from '@/lib/backendlessInit';

export async function GET(req: NextRequest) {
  try {
    const objectId = (await headers()).get('authorization'); // xxxxxx

    if (!objectId)
      throw {
        status: 401,
        message: 'User unauthorize. Object id must be provide',
      };

    const findUserByObjectId = await Backendless.Data.of('Users').findById({
      objectId,
    });

    return NextResponse.json({
      message: 'Session login successfull',
      data: findUserByObjectId,
    });
  } catch (error) {
    const err = error as { status?: number; message?: string };

    return NextResponse.json(
      { message: err.message ?? 'Something went wrong' },
      { status: err?.status ? err?.status : 500 }
    );
  }
}
