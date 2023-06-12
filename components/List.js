"use client"
import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import Link from 'next/link'


import { MdModeEdit } from 'react-icons/md';

function List({ songs }) {
    const [hovered, setHovered] = useState(Array(songs.length).fill(false));

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

    function convertToTime(seconds) {
        if (seconds) {
            seconds /= 60;
            const minute = seconds.toString().split('.')[0];
            const second = seconds.toString().split('.')[1].slice(0, 2);
            const timeString = `${minute}:${second}`;
            return timeString + ' min';
        }
    }

    return (
        <div className="flex justify-center">
        <table className="mt-8 border-collapse rounded-lg overflow-hidden">
            <thead>
            <tr className="rounded-lg">
                <th className="py-2 px-4 bg-green-500">#</th>
                <th className="py-2 px-4 bg-green-500">Título</th>
                <th className="py-2 px-4 bg-green-500">Gênero</th>
                <th className="py-2 px-4 bg-green-500">Duração</th>
                <th className="py-2 px-4 bg-green-500"></th>
            </tr>
            </thead>
            <tbody>
            {songs.map((song, index) => (
                <tr
                className={`hover:bg-gray-100 hover:text-black transition-colors ${
                    hovered[index] ? 'bg-blue-200' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                key={song.id}
                >
                <td className="py-2 px-4">
                    {hovered[index] ? (
                        <Link href={`/song/${song.id}`} replace><MdModeEdit className="cursor-pointer" size={20} /></Link>                 
                    ) : song.id }
                </td>
                <td className="py-2 px-4">{song.title}</td>
                <td className="py-2 px-4">{song.genre}</td>
                <td className="py-2 px-4">{convertToTime(song.duration)}</td>
                <td className="py-2 px-4">
                    <DeleteButton item_id={song.id} />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default List;
