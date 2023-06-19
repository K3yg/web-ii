"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Handle login logic using formData.email and formData.password
        const res = await fetch(`http://localhost:3000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // parse the response
        const data = await res.json();

        if (data.status == 200) {
            toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
            router.push('/');
        } else {
            toast.error(data.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
        <div className="w-1/3 bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                className="bg-green-500 ease-in-out duration-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Sign In
                </button>
            </div>
            </form>
        </div>
        <ToastContainer />
        </div>
    );
}

export default LoginForm;
