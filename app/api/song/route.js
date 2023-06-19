import Music from '@/models/Music';

import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/song:
 *   post:
 *     summary: Insert a song on the database.
 *     description: Insert a song on the database.
 *     responses:
 *       200:
 *         description: A successful response
 */
export async function POST(req) {

    const body = await req.json();
    console.log(body);
    
    let music = await Music.create(body);
    
    return NextResponse.json({ music });
}

/**
 * @swagger
 * /api/song:
 *   get:
 *     summary: Get all songs from the database.
 *     description: Get all songs from the database.
 *     responses:
 *       200:
 *         description: All songs from the database in JSON format.
 */
export async function GET() {
    let musics = await Music.findAll();
    return NextResponse.json({ musics });
}


