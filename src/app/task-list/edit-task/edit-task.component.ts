import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Task} from '../task.model';
import {DataHandlerService} from '../../shared/services/data-handler.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnDestroy {
  taskFromObservable: Task;
  haveTask = false;
  @Output() editTaskEmitter = new EventEmitter<Task>();
  @Output() cancelEditTaskEmitter = new EventEmitter<boolean>();

  constructor(private taskService: DataHandlerService) {
  }

  ngOnInit(): void {
    this.taskService.dataUpdate$.subscribe((task: Task) => {
      this.taskFromObservable = {...task};
      this.haveTask = true;
      console.log(this.taskFromObservable);
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  saveTask(editTask: Task): void {
    this.editTaskEmitter.emit(editTask);
    this.haveTask = false;
  }

  cancelSaveTask(): void {
    this.haveTask = false;
    this.cancelEditTaskEmitter.emit(false);
  }
}
