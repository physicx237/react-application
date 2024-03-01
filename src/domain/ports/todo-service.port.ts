import { Task } from "../models/task.model";

export interface TodoServicePort {
  createTask(task: Task): any;

  updateTask(task: Task): any;

  deleteTask(taskId: Task['id']): any;
}
