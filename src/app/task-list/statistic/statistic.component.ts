import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  taskAll = 15;
  tasksPlanned = 5;
  tasksOverdue = 6;
  tasksFinished = 4;

  constructor() { }

  ngOnInit(): void {
  }

}
