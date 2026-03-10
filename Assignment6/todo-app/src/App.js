import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    const updatedList = [...list, task].sort((a, b) => 
      a.toLowerCase().localeCompare(b.toLowerCase())
    );
    setList(updatedList);
    setTask('');
  };

  const deleteTask = (indexToDelete) => {
    setList(list.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>HashedBit React Assignment</h1>
      
      <div className="todo-container">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="New task..." 
        />
        <button onClick={addTask}>Add</button>

        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item} 
              <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;