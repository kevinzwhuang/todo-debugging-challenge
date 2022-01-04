import React, { useContext, useState } from 'react';
import TaskListContext from './TaskListContext';

function TaskForm() {
  const [name, setName] = useState('');
  const { addTask } = useContext(TaskListContext);
  const handleChange = (e) => setName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(name);
    setName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={name} />
      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;
