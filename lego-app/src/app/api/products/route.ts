import { NextRequest, NextResponse } from 'next/server';
import Backendless from '@/lib/backendlessInit';

export async function GET() {
  try {
    const products = await Backendless.Data.of('Product').find();

    return NextResponse.json({
      message: 'Get products successfull',
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
