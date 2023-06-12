"use client"
import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';


function Form(props) {
  
  const router = useRouter();
  const params = useParams()

  useState(() => {
    async function getSong() {
      const res = await fetch(`http://localhost:3000/api/song/${params.id}`);
      const song = await res.json();
      if (!song) return;
      song.release_date = song.release_date.split('T')[0];
      setFormData(song);
    }
    getSong();
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    duration: '',
    play_count: '',
    release_date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const res = await fetch(`http://localhost:3000/api/song/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
    } else {
      const res = await fetch('http://localhost:3000/api/song', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setFormData({
        title: '',
        genre: '',
        duration: '',
        play_count: '',
        release_date: ''
      });
    }

    router.refresh();    
    
  };

  return (
    <div className='text-black'>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-white">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block mb-2 text-white">
            Genre:
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block mb-2 text-white">
            Duration:
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="play_count" className="block mb-2 text-white">
            Play Count:
          </label>
          <input
            type="text"
            id="play_count"
            name="play_count"
            value={formData.play_count}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="release_date" className="block mb-2 text-white">
            Release Date:
          </label>
          <input
            type="date"
            id="release_date"
            name="release_date"
            value={formData.release_date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    
    </div>
  );
}

export default Form;
