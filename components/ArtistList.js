"use client"
import React, { useState } from 'react';
import DeleteArtistButton from './DeleteArtistButton';
import Link from 'next/link'


import { MdModeEdit } from 'react-icons/md';

function ArtistList({ artists }) {
    const [hovered, setHovered] = useState(Array(artists.length).fill(false));

    const handleMouseEnter = (index) => {
        setHovered((prevState) => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
        });
    };

    const handleMouseLeave = (index) => {
        setHovered((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
        });
    };

    return (
        <div className="flex justify-center">
        <table className="mt-8 border-collapse rounded-lg overflow-hidden">
            <thead>
            <tr className="rounded-lg">
                <th className="py-2 px-4 bg-green-500">#</th>
                <th className="py-2 px-4 bg-green-500">Name</th>
                <th className="py-2 px-4 bg-green-500">Stream count</th>
                <th className="py-2 px-4 bg-green-500">Followers</th>
                <th className="py-2 px-4 bg-green-500"></th>
            </tr>
            </thead>
            <tbody>
            {artists.map((artist, index) => (
                <tr
                className={`hover:bg-gray-100 hover:text-black transition-colors ${
                    hovered[index] ? 'bg-blue-200' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                key={artist.id}
                >
                <td className="py-2 px-4">
                    {hovered[index] ? (
                        <Link href={`/artist/${artist.id}`} replace><MdModeEdit className="cursor-pointer" size={20} /></Link>                 
                    ) : artist.id }
                </td>
                <td className="py-2 px-4">{artist.name}</td>
                <td className="py-2 px-4">{artist.stream_count}</td>
                <td className="py-2 px-4">{artist.followers}</td>
                <td className="py-2 px-4">
                    <DeleteArtistButton item_id={artist.id} />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default ArtistList;
