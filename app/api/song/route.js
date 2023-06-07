import Music from '../../../models/Music';

import { NextResponse } from 'next/server';


export async function POST(req) {

    const body = await req.json();
    console.log(body);
    
    let music = await Music.create(body);


    // let music = await Music.create({
    //     title: 'Sorry Mom',
    //     genre: 'Trap',
    //     duration: 138.6,
    //     play_count: 0,
    //     release_date: new Date()
    // })
    // let music = await Music.create({
    //     title: 'Heartless',
    //     genre: 'Rap',
    //     duration: 198.6,
    //     play_count: 0,
    //     release_date: new Date()
    // })
    
    return NextResponse.json({ music });
}


export async function GET() {
    let musics = await Music.findAll();
    return NextResponse.json({ musics });
}


