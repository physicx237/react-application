import { TodoServicePort } from '../domain/ports/todo-service.port';
import { Task } from '../domain/models/task.model';
import { BehaviorSubject } from 'rxjs';

export class TodoService implements TodoServicePort {
  tasks$ = new BehaviorSubject<Task[]>([]);

  createTask(task: Omit<Task, 'id'>) {
    const previousValue = this.tasks$.getValue();

    const id = Number(Math.random().toString(10));

    this.tasks$.next([...previousValue, { id: id, ...task }]);
  }

  updateTask(task: Task) {
    const previousValue = this.tasks$.getValue();

    const currentValue = previousValue.map((item) =>
      item.id === task.id ? task : item
    );

    this.tasks$.next([...currentValue]);
  }

  deleteTask(index: number) {
    const previousValue = this.tasks$.getValue();

    previousValue.splice(index, 1);

    this.tasks$.next([...previousValue]);
  }
}
