import React from 'react'
import ArtistForm from '@/components/ArtistForm'
import ArtistList from '@/components/ArtistList'

export default async function Artist() {
    async function getArtists() {
        const res = await fetch('http://localhost:3000/api/artist', {cache: "no-cache"});
        let data = await res.json();
        return data.artists;
    }
    
    const artists = await getArtists();
    return (
        <div>
            <ArtistList artists={...artists} />
            <ArtistForm />
        </div>
    )
}