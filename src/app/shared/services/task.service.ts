import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Task} from '../../task-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private dataSource = new Subject<Task>();
  dataUpdate$ = this.dataSource.asObservable();
  updateDate(data: Task): void {
    this.dataSource.next(data);
  }

  constructor() { }
}
