import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  name: string;
  category: string;
  dateStart: string;
  dateEnd: string;
  status: string;
  task: Task;
  @Output() addTaskEmitter = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    this.task = new Task(this.name, this.category, this.dateStart, this.dateEnd, this.status);
    this.addTaskEmitter.emit(this.task);
    this.name = '';
    this.category = '';
    this.dateStart = '';
    this.dateEnd = '';
    this.status = '';
    console.log(this.task);
  }
}
