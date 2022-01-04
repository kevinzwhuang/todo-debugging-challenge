import TaskList from './TaskList';
import TaskListContextProvider from './TaskListContextProvider';
import TaskForm from './TaskForm';
import TaskIndicator from './TaskIndicator';
import './App.css';

function App() {
  return (
    <TaskListContextProvider>
      <div className="App">
        <header className="app-header">
          <TaskIndicator />
        </header>
        <TaskForm />
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
}

export default App;
