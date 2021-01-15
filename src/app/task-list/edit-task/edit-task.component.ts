import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Task} from '../task.model';
import {TaskService} from '../../shared/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnDestroy, OnChanges {
  @Input() editTask: Task;
  taskFromObservable: Task;
  haveTask = false;
  @Output() editTaskEmitter = new EventEmitter<Task>();
  @Output() cancelEditTaskEmitter = new EventEmitter<boolean>();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.dataUpdate$.subscribe((task: Task) => {
      this.taskFromObservable = task;
      this.haveTask = true;
      console.log(this.taskFromObservable);
    });
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
    this.haveTask = false;
    this.cancelEditTaskEmitter.emit(false);
  }
}
