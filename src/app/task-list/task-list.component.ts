import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [
    {name: 'Футбол с сотрудниками', category: 'досуг', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Запланировано'},
    {name: 'Сравнить новый айпад с самсунгом', category: 'досуг', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Выполнено'},
    {name: 'Сдать анализы', category: 'здоровье', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Просрочено'},
    {name: 'Попросить аванс на работе', category: 'работа', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Запланировано'},
    {name: 'Положить 100 000 р в банк', category: 'финансы', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Выполнено'},
    {name: 'Сдать экзамен по Java', category: 'обучение', dateStart: '20:15 08-10-2019', dateEnd: '20:18 10-10-2019', status: 'Просрочено'}
  ];

  getTaskListSize(): number {
    return this.tasks.length;
  }

  getTasksAmountByStatus(status: string): number {
    return this.tasks.filter(task => status === task.status).length;
  }

  deleteTaskFromArray(name: string): void {
    console.log('Задача' + name + 'удалена');
  }

  addTask(): void {
    console.log('Задача создана');
  }

  filterTasks(event: any): void {
    console.log(event.target.checked);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
