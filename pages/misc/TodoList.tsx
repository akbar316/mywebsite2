import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ToolPageLayout } from '../../components/ToolPageLayout';
import type { ToolData } from '../../types';

interface TodoListProps {
  tool: ToolData;
}

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ tool }) => {
    const [todos, setTodos] = useLocalStorage<Todo[]>('dicetools-todos', []);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
        setNewTodo('');
    };
    
    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    };
    
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <ToolPageLayout tool={tool}>
          <div className="max-w-md mx-auto">
              <form onSubmit={addTodo} className="flex mb-4">
                  <input
                      type="text"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      placeholder="Add a new task"
                      className="flex-grow p-2 bg-brand-bg border border-brand-border rounded-l-md"
                  />
                  <button type="submit" className="bg-brand-primary text-brand-bg px-4 rounded-r-md font-bold">Add</button>
              </form>
              <div className="space-y-2">
                  {todos.map(todo => (
                      <div key={todo.id} className="flex items-center bg-brand-bg p-2 rounded-md">
                          <span onClick={() => toggleTodo(todo.id)} className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-brand-text-secondary' : ''}`}>
                              {todo.text}
                          </span>
                          <button onClick={() => deleteTodo(todo.id)} className="text-red-500 ml-4 hover:bg-red-500/20 rounded-full w-6 h-6 flex items-center justify-center">✕</button>
                      </div>
                  ))}
              </div>
          </div>
        </ToolPageLayout>
    );
};

export default TodoList;