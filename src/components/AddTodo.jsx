import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new Todo"
        className="w-full p-2 rounded border"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white p-2 rounded ml-2"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
