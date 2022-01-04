import { useState } from 'react';
import TaskListContext from './TaskListContext';

function TaskListContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const context = {
    addTask: (name) => {
      const task = { name, completed: false };
      setTasks([...tasks, task]);
    },
    toggleTask: (name) => {
      setTasks(
        tasks.map((task) => {
          if (task.name !== name) return task;

          return { ...task, completed: !task.completed };
        })
      );
    },
    removeTask: (name) => {
      const newTasks = tasks.filter((task) => task.name !== name);
      setTasks(newTasks);
    },
    tasks,
  };
  return (
    <TaskListContext.Provider value={context}>
      {children}
    </TaskListContext.Provider>
  );
}

export default TaskListContextProvider;
