import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Task} from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnDestroy, OnChanges {
  @Input() editTask: Task;
  @Output() editTaskEmitter = new EventEmitter<Task>();
  @Output() cancelEditTaskEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editTask.status === 'Выполнено') {
      alert('Нельзя редактировать задачу');
      setTimeout(() =>  {
        this.cancelEditTaskEmitter.emit(false);
        }, 100);
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  saveTask(editTask: Task): void {
    console.log(editTask);
    this.editTaskEmitter.emit(editTask);
  }

  cancelSaveTask(): void {
    this.cancelEditTaskEmitter.emit(false);
  }
}
