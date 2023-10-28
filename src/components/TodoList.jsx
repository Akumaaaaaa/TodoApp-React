import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo, setFilter } from '../redux/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    }
    return true;
  });

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className={`${
            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } p-2 rounded mr-2`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('active'))}
          className={`${
            filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } p-2 rounded mr-2`}
        >
          Active
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          className={`${
            filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } p-2 rounded`}
        >
          Completed
        </button>
      </div>
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className={`${
            todo.completed ? 'bg-green-100' : 'bg-white'
          } p-2 mb-2 flex items-center justify-between rounded border`}
        >
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.completed ? (
              <del className="ml-2">{todo.text}</del>
            ) : (
              <span className="ml-2">{todo.text}</span>
            )}
          </div>
          <div>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500"
            >
              Delete
            </button>
            <button
              onClick={() => {
                const newText = prompt('Edit Todo', todo.text);
                if (newText) {
                  dispatch(editTodo({ id: todo.id, text: newText }));
                }
              }}
              className="ml-2 text-blue-500"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
