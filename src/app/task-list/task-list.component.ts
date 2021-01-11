import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  addTask(): void {
    console.log('Задача создана');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
