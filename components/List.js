import React from 'react';
import DeleteButton from './DeleteButton';

function List({songs}) {

    function convertToTime(seconds) {
        seconds /= 60;
        const minute = seconds.toString().split('.')[0];
        const second = seconds.toString().split('.')[1].slice(0, 2);
        const timeString = `${minute}:${second}`;
        return timeString + ' min';
    }

    return (
        <div className="flex justify-center">
            <table className="mt-8 border-collapse rounded-lg overflow-hidden">
            <thead>
                <tr className='rounded-lg'>
                <th className="py-2 px-4 bg-green-500">Título</th>
                <th className="py-2 px-4 bg-green-500">Gênero</th>
                <th className="py-2 px-4 bg-green-500">Duração</th>
                <th className="py-2 px-4 bg-green-500"></th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song) => (
                    <tr className="hover:bg-gray-100 hover:text-black transition-colors">
                        <td className="py-2 px-4">{song.title}</td>
                        <td className="py-2 px-4">{song.genre}</td>
                        <td className="py-2 px-4">{convertToTime(song.duration)}</td>
                        <td className="py-2 px-4"><DeleteButton item_id={song.id} /></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

export default List;
