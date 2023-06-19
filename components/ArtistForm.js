"use client"
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function ArtistForm () {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        stream_count: '',
        followers: ''
    });

    const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch(`http://localhost:3000/api/artist`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        setFormData({
            name: '',
            stream_count: '',
            followers: ''
        });
        router.push('/artist');
        
    };

    return (
        <div className="flex items-center justify-center pt-16">
            <div className="w-1/3 bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-4 text-black">Add a artist</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter the artist name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Stream count
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="stream_count"
                            name="stream_count"
                            type="text"
                            value={formData.stream_count}
                            onChange={handleChange}
                            placeholder="Enter the stream count"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Followers
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="followers"
                            name="followers"
                            type="followers"
                            value={formData.followers}
                            onChange={handleChange}
                            placeholder="Enter the amount of followers"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-green-500 ease-in-out duration-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Create artist
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArtistForm;
