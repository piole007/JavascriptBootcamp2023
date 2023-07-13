import React, { useState } from 'react';

function TodoItem({ text }) {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
    </li>
  );
}

export default TodoItem;
