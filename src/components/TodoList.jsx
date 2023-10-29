import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo, setFilter } from '../redux/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

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
      <div className="mb-4 lg:space-x-4 md:space-x-0">
        <button
          onClick={() => dispatch(setFilter('all'))}
          className={`${
            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } p-2 rounded w-44`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('active'))}
          className={`${
            filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } p-2 rounded w-44`}
        >
          Active
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          className={`${
            filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          } p-2 rounded w-44`}
        >
          Completed
        </button>
      </div>
      {filteredTodos.length === 0 ? (
        <div className="text-gray-500 text-lg text-center my-8 animate-bounce">
          Data isn't available
        </div>
      ) : (
        filteredTodos.map((todo) => (
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
              <div className="text-sm text-gray-500 mt-1">
                Created at: {todo.createdAt}
              </div>
            </div>
            <div>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-500"
              >
                <FontAwesomeIcon icon={faTrash} />
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
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

TodoList.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default TodoList;