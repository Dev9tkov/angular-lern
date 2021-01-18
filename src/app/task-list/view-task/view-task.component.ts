import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  router: ActivatedRoute;
  constructor(router: ActivatedRoute) {
    this.router = router;
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      console.log('params', params);
    });
  }
}
