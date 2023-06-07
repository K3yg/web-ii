import { React } from 'react';
import Form from '../components/Form';
import List from '@/components/List';




const Home = async () => {
  async function getSongs() {
    const res = await fetch('http://localhost:3000/api/song', {cache: "no-cache"});
    let data = await res.json();
    return data.musics;
}


const songs = await getSongs();

  return (
    <div>
      <List songs={...songs}/>
      <Form />

    </div>
  );
};

export default Home;
