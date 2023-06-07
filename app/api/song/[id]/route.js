import { NextResponse } from 'next/server';
import Music from '@/models/Music';

export async function DELETE(request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1);
    let music = await Music.findByPk(id);
    await music.destroy();

    return NextResponse.json({ music: 'deleted' });
}