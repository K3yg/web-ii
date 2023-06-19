import { NextResponse } from 'next/server';
const User = require('@/models/User');

export async function GET() {
    const users = await User.findAll();
    
    return NextResponse.json({ users });
}


export async function POST(request) {
    const body = await request.json();
    

    const user = await User.create(body)

    return NextResponse.json({});
}