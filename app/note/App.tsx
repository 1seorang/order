'use client'
import React, { useState, useEffect } from 'react';
import './index.css';
import { Divider } from '@nextui-org/divider';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as string[];
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App w-full backdrop-blur-md rounded-xl mt-1 bg-slate-300/10 min-h-[400px] ">
      <main className="App-header w-full pt-1 rounded-md">
        <div className="todo-input w-full justify-between px-2 my-2">
          <input
            type="text"
            placeholder="Tambah Catatan"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className='text-xl font-bold' onClick={handleAddTodo}>+</button>
        </div>
      </main>
      <Divider className='my-2' />
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;