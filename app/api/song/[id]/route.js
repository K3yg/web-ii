import { NextResponse } from 'next/server';
import Music from '@/models/Music';


export async function GET(request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1);
    let music = await Music.findByPk(id);

    return NextResponse.json(music);
}
export async function DELETE(request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1);
    let music = await Music.findByPk(id);
    await music.destroy();
    console.log('music')

    return NextResponse.json({ music: 'deleted' });
}

export async function PUT(request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1);
    const body = await request.json();
    let music = await Music.findByPk(id);
    await music.update(body);

    return NextResponse.json({ music: 'updated' });
}
