import React from 'react';

const TaskListContext = React.createContext({
  addTask: (taskName) => {
    throw new Error('addTask not implemented');
  },
  toggleTask: (taskName) => {
    throw new Error('toggleTask not implemented');
  },
  removeTask: (taskName) => {
    throw new Error('removeTask not implemented');
  },
  tasks: [
    {
      completed: false,
      name: 'Fix Task List (if this shows, tasks is not implemented)',
    },
  ],
});

export default TaskListContext;
