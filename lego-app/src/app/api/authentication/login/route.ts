import { NextRequest, NextResponse } from 'next/server';
import Backendless from '@/lib/backendlessInit';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const res = await Backendless.UserService.login(email, password);
    
    return NextResponse.json({
        message: 'Login user successfull', 
        data: res
    })
  } catch (error) {
    const err = error as { status?: number; message?: string };

    return NextResponse.json(
      { message: err.message ?? 'Something went wrong' },
      { status: err?.status ? err?.status : 500 }
    );
  }
}
