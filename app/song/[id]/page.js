'use client'
import { React } from 'react';
import Form from '@/components/Form';
import Link from 'next/link';


const Home = async () => {

    return (
        <div>
            <p><Link href='/'>Back</Link></p>
            <Form  />
        </div>
    );
};

export default Home;
