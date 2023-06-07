"use client"
import React from 'react';
import { useRouter } from 'next/navigation';


const DeleteButton = ({item_id}) => {
  const router = useRouter();

  async function handleClick(item_id) {
    console.log('Click happened', item_id);
    // create a delete request sending the item_id to the server
    const res = await fetch('http://localhost:3000/api/song/' + item_id, {
      method: 'DELETE'
    })

    router.refresh();
  }

  return (
    <button onClick={() => handleClick(item_id)}>
      Excluir o {item_id}
    </button>
  );
};

export default DeleteButton;
