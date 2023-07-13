import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {

  const [todos, setTodos] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
