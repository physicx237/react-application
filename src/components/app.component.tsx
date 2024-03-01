import { TodoService } from '../adapters/todo.service';
import './app.component.css';
import TaskForm from './task-form/task-form.component';
import Tasks from './tasks/tasks.component';

export const todoService = new TodoService();

function App() {
  return (
    <>
      <TaskForm></TaskForm>
      <Tasks></Tasks>
    </>
  );
}

export default App;
