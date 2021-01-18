import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Task} from './task.model';
import {DataHandlerService} from '../shared/services/data-handler.service';
import {TaskStorageService} from '../shared/services/task-storage.service';
import {typeIsOrHasBaseType} from 'tslint/lib/language/typeUtils';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  selectedIndex: number;
  selectedTask: Task;
  taskFromObservable: Task;
  checked: boolean;
  addOrEditCommand: boolean; // true-add false-edit
  tasks: Task[] = [];
  dataHandlerService: DataHandlerService;
  taskStorageService: TaskStorageService;
  router: ActivatedRoute;
  route: Router;

  constructor(dataHandlerService: DataHandlerService,
              taskStorageService: TaskStorageService,
              router: ActivatedRoute, route: Router) {
    this.dataHandlerService = dataHandlerService;
    this.taskStorageService = taskStorageService;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    this.addOrEditCommand = true;
    this.taskStorageService.initTasksArray(this.tasks);
    this.dataHandlerService.dataUpdate$.subscribe((task: Task) => {
      this.taskFromObservable = task;
      this.addOrEditCommand = false;
    });
    this.router.params.subscribe((params: Params) => {
      console.log('params', params);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  getTaskListSize(): number {
    return this.tasks.length;
  }

  getTasksAmountByStatus(status: string): number {
    return this.tasks.filter(task => status === task.status).length;
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
    this.addOrEditCommand = true;
  }

  editTask(task: Task): void {
    this.addOrEditCommand = !this.addOrEditCommand;
    this.selectedIndex = task.id;
    this.selectedTask = {...task}; // клонированный task
    this.dataHandlerService.updateDate(task);
  }

  cancelEditTaskEmitter(cancel: boolean): void {
    this.addOrEditCommand = true;
  }

  viewTask(taskId: number): void {
    this.route.navigate(['/tasks'], {queryParams: {id: taskId}});
  }


}
