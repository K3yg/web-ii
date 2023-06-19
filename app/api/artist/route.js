import { NextResponse } from 'next/server';
const Artist = require('@/models/Artist');

export async function GET() {
    const artists = await Artist.findAll();

    return NextResponse.json({ artists });
}

export async function POST(request) {
    const body = await request.json();
    
    const artist = await Artist.create(body)
    
    return NextResponse.json({ artist });
}