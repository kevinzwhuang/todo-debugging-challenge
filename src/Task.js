import { useContext } from 'react';
import TaskListContext from './TaskListContext';

function Task({ task }) {
  const { toggleTask, removeTask, tasks } = useContext(TaskListContext);
  const handleRemove = () => {
    removeTask(task.name);
  };
  const handleToggle = () => {
    toggleTask(task.name);
  };
  return (
    <div>
      <button onClick={handleToggle}>{task.completed ? '✅' : '◻️'}</button>{' '}
      <button onClick={handleRemove}>❌</button> <label>{task.name}</label>
    </div>
  );
}

export default Task;
