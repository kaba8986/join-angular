import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  allTasks$: Observable<Task[]>;
  tasksStage0$: Observable<Task[]>;
  tasksStage1$: Observable<Task[]>;
  tasksStage2$: Observable<Task[]>;
  tasksStage3$: Observable<Task[]>;
  urgentTasks$: Observable<Task[]>;
  closestDeadline$: Observable<Task[]>;


  constructor(
    public _ds: DataService
  ) { 
    this.allTasks$ = this._ds.getAllTasks();
    this.tasksStage0$ = this._ds.getTasksByStage(0);
    this.tasksStage1$ = this._ds.getTasksByStage(1);
    this.tasksStage2$ = this._ds.getTasksByStage(2);
    this.tasksStage3$ = this._ds.getTasksByStage(3);
    this.urgentTasks$ = this._ds.getUrgentTasks();
    this.closestDeadline$ = this._ds.getClostestDeadline();
    
  }

  ngOnInit(): void {

  }

}
