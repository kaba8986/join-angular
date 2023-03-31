import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.class';

@Component({
  selector: 'app-task-detail-view',
  templateUrl: './task-detail-view.component.html',
  styleUrls: ['./task-detail-view.component.scss']
})
export class TaskDetailViewComponent implements OnInit {

  taskId: string = "";
  currTask: Task = new Task();
  today = new Date().getTime();

  constructor() { }

  ngOnInit(): void {
    console.log(this.currTask);
  }

  getDuedate(millis: number) {
    return new Date(millis);
  }

}
