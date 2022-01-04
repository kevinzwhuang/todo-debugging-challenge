import { useContext } from 'react';
import TaskListContext from './TaskListContext';

function TaskIndicator() {
  const { tasks } = useContext(TaskListContext);
  return <div>There are {tasks.length} tasks.</div>;
}

export default TaskIndicator;
