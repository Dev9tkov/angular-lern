import {Component, OnInit} from '@angular/core';
import {Task} from './task.model';
import {TaskService} from '../shared/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  selectedIndex: number;
  selectedTask: Task;
  taskFromObservable: Task;
  tasks: Task[] = [
    new Task('Футбол с сотрудниками', 'досуг', '20:15 08-10-2019', '20:18 10-10-2019', 'Запланировано'),
    new Task('Сравнить новый айпад с самсунгом', 'досуг', '20:15 08-10-2019', '20:18 10-10-2019', 'Выполнено'),
    new Task('Сдать анализы', 'работа', '20:15 08-10-2019', '20:18 10-10-2019', 'Просрочено'),
    new Task('Попросить аванс на работе', 'досуг', '20:15 08-10-2019', '20:18 10-10-2019', 'Запланировано'),
    new Task('Положить 100 000 в банк', 'финансы', '20:15 08-10-2019', '20:18 10-10-2019', 'Выполнено'),
    new Task('Сдать экзамен по Java', 'обучение', '20:15 08-10-2019', '20:18 10-10-2019', 'Просрочено')
  ];
  checked: boolean;
  addCommand: boolean;
  editCommand: boolean;
  constructor(private taskService: TaskService) {
  }

  getTaskListSize(): number {
    return this.tasks.length;
  }

  getTasksAmountByStatus(status: string): number {
    return this.tasks.filter(task => status === task.status).length;
  }

  deleteTaskFromArray(name: string): void {
    console.log('Задача' + name + 'удалена');
  }

  filterTasks(event: any): void {
    this.checked = event.target.checked;
    console.log(this.checked);
  }

  deleteTask(index: number): void {
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
  addTaskToArray(task: Task): void {
    this.tasks.push(task);
  }

  editTaskInArray(task: Task): void {
    this.tasks[this.selectedIndex] = task;
    this.editCommand = false;
    this.addCommand = true;
  }

  editTask(task: Task, idx: number): void {
    this.addCommand = false;
    this.editCommand = true;
    this.selectedIndex = idx;
    this.selectedTask = {...task}; // клонированный task
  }

  ngOnInit(): void {
    this.addCommand = true;
    this.taskService.dataUpdate$.subscribe((task: Task) => {
      this.taskFromObservable = task;
      this.addCommand = false;
      this.editCommand = true;
      });
  }

  cancelEditTaskEmitter(cancel: boolean): void {
    this.editCommand = cancel; // false при нажатии кнопки отменить в edit-task component
    this.addCommand = true;
  }
}
