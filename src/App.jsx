import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="bg-black-100 min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold my-8 flex items-center">
        <img
          src="https://imgur.com/Vp2uUK1.png"
          alt="Your Image Alt Text"
          className="w-12 h-12 mr-2"
        />
        To-do List
      </h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

App.propTypes = {
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default App;