import React from 'react';
import { useRouter } from 'next/navigation';
import { MdDelete } from 'react-icons/md';

const DeleteButton = ({ item_id }) => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/song/${item_id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        // Optionally, you can provide feedback to the user here
        console.log('Item deleted successfully');
        router.refresh();
      } else {
        console.log('Failed to delete item');
        // Handle error case here

      }
    } catch (error) {
      console.log('Error occurred while deleting item', error);
      // Handle error case here
    }
  };

  return (
    <button onClick={handleClick}>
      <MdDelete size={20} />
    </button>
  );
};

export default DeleteButton;
