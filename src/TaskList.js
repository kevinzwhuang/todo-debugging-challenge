import { useContext } from 'react';
import Task from './Task';
import TaskListContext from './TaskListContext';

function TaskList() {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <h1>Tasks:</h1>
      {tasks.length === 0 && <div>No tasks</div>}
      {tasks.map((task) => {
        return <Task key={task.name} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
