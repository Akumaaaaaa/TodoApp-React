import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-8 flex items-center">
        <img
          src="https://imgur.com/Vp2uUK1.png"
          alt="Your Image Alt Text"
          className="w-12 h-12 mr-2"
        />
        Todo List
      </h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
