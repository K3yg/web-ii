"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


function Form() {
  
  const router = useRouter();

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

    const res = await fetch('http://localhost:3000/api/song', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    router.refresh();

    //  reset all fields after submit
    setFormData({
      title: '',
      genre: '',
      duration: '',
      play_count: '',
      release_date: ''
    });
    
    console.log(formData);
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
