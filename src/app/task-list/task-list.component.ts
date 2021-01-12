import { Component, OnInit } from '@angular/core';
import {Task} from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    new Task('Футбол с сотрудниками', 'досуг', '20:15 08-10-2019', '20:18 10-10-2019', 'Запланировано'),
    new Task('Сравнить новый айпад с самсунгом', 'досуг', '20:15 08-10-2019', '20:18 10-10-2019', 'Выполнено'),
    new Task('Сдать анализы', 'работа', '20:15 08-10-2019', '20:18 10-10-2019', 'Просрочено'),
    new Task('Попросить аванс на работе', 'досуг', '20:15 08-10-2019', '20:18 10-10-2019', 'Запланировано'),
    new Task('Положить 100 000 р в банк', 'финансы', '20:15 08-10-2019', '20:18 10-10-2019', 'Выполнено'),
    new Task('Сдать экзамен по Java', 'обучение', '20:15 08-10-2019', '20:18 10-10-2019', 'Просрочено')
  ];

  // tasks = [
  //   {name: 'Футбол с сотрудниками', category: 'досуг', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Запланировано'},
  //   {name: 'Сравнить новый айпад с самсунгом', category: 'досуг', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Выполнено'},
  //   {name: 'Сдать анализы', category: 'здоровье', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Просрочено'},
  //   {name: 'Попросить аванс на работе', category: 'работа', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Запланировано'},
  //   {name: 'Положить 100 000 р в банк', category: 'финансы', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Выполнено'},
  //   {name: 'Сдать экзамен по Java', category: 'обучение', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Просрочено'}
  // ];

  checked: boolean;

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

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(index: number): void {
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
  addTaskToArray(task: Task): void {
    this.tasks.push(task);
  }
}
