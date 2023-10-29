import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
});

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const handleAddTodo = () => {
    if (text.trim() === '') {
      Toast.fire({
        icon: 'error',
        title: 'To-do Cannot be Empty!'
      });
      return;
    }

    if (todos.some((todo) => todo.text === text)) {
      Toast.fire({
        icon: 'warning',
        title: 'To-do Already Exists!'
      });
      return;
    }

    dispatch(addTodo(text));
    setText('');
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

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
