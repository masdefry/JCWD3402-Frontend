import Backendless from '@/lib/backendlessInit';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { objectId: string } }
) {
  try {
    const { objectId } = await params;

    const products = await Backendless.Data.of('Product').findById(objectId);

    return NextResponse.json({
      message: `Get product with id = ${objectId} successfull`,
      data: products,
    });
  } catch (error) {
    const err = error as { status?: number; message?: string };

    return NextResponse.json(
      { message: err.message ?? 'Something went wrong' },
      { status: err?.status ? err?.status : 500 }
    );
  }
}
