import { NextResponse } from 'next/server';
import Music from '@/models/Music';

/**
 * @swagger
 * /api/song/{id}:
 *   get:
 *     summary: Get a song by ID
 *     description: Retrieve a song by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the song to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the song with the given ID
 */
export async function GET(request, { params: { id } }) {

    let music = await Music.findByPk(id);

    return NextResponse.json(music);
}

/**
 * @swagger
 * /api/song/{id}:
 *   delete:
 *     summary: Delete a song by ID
 *     description: Delete a song by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the song to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a status message
 */
export async function DELETE(request, { params: { id } }) {
    let music = await Music.findByPk(id);
    await music.destroy();
    console.log('music');

    return NextResponse.json({ music: 'deleted' });
}

/**
 * @swagger
 * /api/song/{id}:
 *   put:
 *     summary: Update a song by ID
 *     description: Update a song by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the song to update
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a status message
 */
export async function PUT(request, { params: { id } }) {
    const body = await request.json();
    let music = await Music.findByPk(id);
    await music.update(body);

    return NextResponse.json({ music: 'updated' });
}
