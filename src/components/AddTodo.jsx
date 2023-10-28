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
    <div className="mb-6 flex items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new Todo"
        className="w-96 p-3 rounded border"
      />
      <button
        onClick={handleAddTodo}
        className="add-button bg-blue-500 text-white p-3 rounded ml-3 w-40"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
