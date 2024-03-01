import { useEffect, useRef, useState } from 'react';
import { Task } from '../../domain/models/task.model';
import { todoService } from '../app.component';

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [taskDescription, setTaskDescription] = useState<string>('');

  const [editTask, setEditTask] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    todoService.tasks$.subscribe((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const taskList = tasks.map((task) => (
    <div key={task.id}>
      {editTask === task.id ? (
        <input
          ref={inputRef}
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
        />
      ) : (
        <span>{task.description}</span>
      )}

      <button
        onClick={async () => {
          await setEditTask(task.id);

          if (inputRef.current) {
            inputRef.current.value = task.description;
          }

          if (editTask === task.id) {
            todoService.updateTask({ ...task, description: taskDescription });

            setEditTask(0);
          }
        }}
      >
        Редактировать задачу
      </button>

      <button
        onClick={() => {
          todoService.deleteTask(task.id);
        }}
      >
        Удалить задачу
      </button>
    </div>
  ));

  return (
    <>
      <p>Задачи:</p>

      <div>{taskList}</div>
    </>
  );
}

export default Tasks;
