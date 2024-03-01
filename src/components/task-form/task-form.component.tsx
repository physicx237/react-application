import { useState } from 'react';
import { todoService } from '../app.component';

function TaskForm() {
  const [task, setTask] = useState<string>('');

  function createTask() {
    todoService.createTask({ isDone: false, description: task });
  }

  return (
    <>
      Введите описание задачи:
      <p>
        <input
          onChange={function (e) {
            setTask(e.target.value);
          }}
        />
      </p>
      <p>
        <button onClick={createTask}>Создать задачу</button>
      </p>
    </>
  );
}

export default TaskForm;
