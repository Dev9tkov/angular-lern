import { Injectable } from '@angular/core';
import {Task} from '../../task-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  initialTasksArray: Task[];

  constructor() { }

  initTasksArray(task: Task[]): Task[] {
    task.push(
      new Task(0, 'name0', 'category0', '02:00 01-10-2020', '02:11 01-10-2020', 'Заврешено'),
      new Task(1, 'name1', 'category1', '02:01 01-10-2020', '02:12 01-10-2020', 'Просрочено'),
      new Task(2, 'name2', 'category2', '02:02 01-10-2020', '02:13 01-10-2020', 'Выполняется'),
      new Task(3, 'name3', 'category3', '02:03 01-10-2020', '02:14 01-10-2020', 'Запланировано'),
      new Task(4, 'name4', 'category0', '02:04 01-10-2020', '02:15 01-10-2020', 'Заврешено'),
      new Task(5, 'name5', 'category1', '02:05 01-10-2020', '02:16 01-10-2020', 'Просрочено'),
      new Task(6, 'name6', 'category2', '02:06 01-10-2020', '02:17 01-10-2020', 'Выполняется'),
      new Task(7, 'name7', 'category3', '02:07 01-10-2020', '02:18 01-10-2020', 'Запланировано'),
      new Task(8, 'name8', 'category0', '02:08 01-10-2020', '02:19 01-10-2020', 'Заврешено'),
      new Task(9, 'name9', 'category1', '02:09 01-10-2020', '02:20 01-10-2020', 'Просрочено'),
      new Task(10, 'name10', 'category2', '02:10 01-10-2020', '02:21 01-10-2020', 'Выполняется'),
      new Task(11, 'name11', 'category3', '02:10 01-10-2020', '02:21 01-10-2020', 'Запланировано')
    );
    this.initialTasksArray = task;
    return this.initialTasksArray;
  }

  addTaskInArray(task: Task): void {
    this.initialTasksArray.push(task);
  }

  editTaskInArray(task: Task): void {
    this.initialTasksArray[task.id] = task;
  }

  deleteTaskFromArray(id: number): void {
    delete this.initialTasksArray[id];
  }
}
