import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {HelperService} from '../../shared/services/helper.service';
import {TaskService} from '../../shared/services/task.service';
import {Task} from '../task.model';

@Component({
  selector: '[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {
  @Input() name;
  @Input() category;
  @Input() dateStart;
  @Input() dateEnd;
  @Input() status;

  @Output() deleteTaskEmitter = new EventEmitter<string>();

  deleteTask(): void {
    this.deleteTaskEmitter.emit(this.name);
  }

    constructor(public helperService: HelperService,
                public taskService: TaskService) { }

  ngOnInit(): void {
  }

  editTask(name: string, category: string, dateStart: string, dateEnd: string, status: string): void {
    const taskFromForm = new Task(name, category, dateStart, dateEnd, status);
    this.taskService.updateDate(taskFromForm);
  }
}
