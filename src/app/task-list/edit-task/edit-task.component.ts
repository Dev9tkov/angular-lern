import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() editTask: Task;
  @Output() editTaskEmitter = new EventEmitter<Task>();
  @Output() cancelEditTaskEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  saveTask(editTask: Task): void {
    console.log(editTask);
    this.editTaskEmitter.emit(editTask);
  }

  cancelSaveTask(): void {
    this.cancelEditTaskEmitter.emit(false);
  }
}
