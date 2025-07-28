import { NextRequest, NextResponse } from 'next/server';
import Backendless from '@/lib/backendlessInit';

export async function POST(req: NextRequest) {
  try {
    const user = await req.json(); // Request Body

    const res = await Backendless.UserService.register(user);
    console.log(res?.message);
    return NextResponse.json({
      success: true,
      message: 'Register user successfully',
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
