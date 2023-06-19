import { NextResponse } from 'next/server';
import Artist from '@/models/Artist';

/**
 * @swagger
 * /api/artist/{id}:
 *   get:
 *     summary: Get a artist by ID
 *     description: Retrieve a artist by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the artist to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the artist with the given ID
 */
export async function GET(request, { params: { id } }) {

    let artist = await Artist.findByPk(id);

    return NextResponse.json(artist);
}

/**
 * @swagger
 * /api/artist/{id}:
 *   delete:
 *     summary: Delete a artist by ID
 *     description: Delete a artist by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the artist to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a status message
 */
export async function DELETE(request, { params: { id } }) {
    let artist = await Artist.findByPk(id);
    await artist.destroy();

    return NextResponse.json({ artist: 'deleted' });
}

/**
 * @swagger
 * /api/artist/{id}:
 *   put:
 *     summary: Update a artist by ID
 *     description: Update a artist by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the artist to update
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a status message
 */
export async function PUT(request, { params: { id } }) {
    const body = await request.json();
    let artist = await Artist.findByPk(id);
    await artist.update(body);

    return NextResponse.json({ artist: 'updated' });
}
