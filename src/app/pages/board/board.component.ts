import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.class';
import { DatePipe } from '@angular/common';
import { MatDialog} from '@angular/material/dialog';
import { AddTaskDialogComponent } from 'src/app/components/add-task-dialog/add-task-dialog.component';
import { TaskDetailViewComponent } from 'src/app/components/task-detail-view/task-detail-view.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  levels: any = ['To do', 'In progress', 'Awaiting Feedback', 'Done'];
  allTasks$: Observable<Task[]>;
  allTasks: any = [];
  tasksStage0$: any;
  tasksStage1$: any;
  tasksStage2$: any;
  tasksStage3$: any;
  today = new Date().getTime();


  constructor(
    private _firestore: AngularFirestore,
    private dialog: MatDialog,
    public _ds: DataService
  ) { 
    this.allTasks$ = this._ds.getAllTasks();

    this.tasksStage0$ = this._ds.getTasksByStage(0);
    this.tasksStage1$ = this._ds.getTasksByStage(1);
    this.tasksStage2$ = this._ds.getTasksByStage(2);
    this.tasksStage3$ = this._ds.getTasksByStage(3);

  }

  ngOnInit(): void {

  }

  getDate(millis: number) {
    return new Date(millis);
  }

  openDialog(stage: number) {
    const dialogRef = this.dialog.open(AddTaskDialogComponent);
    dialogRef.componentInstance.stage = stage;
  }

  openDetailView(obj: any) {
    const dialogRef = this.dialog.open(TaskDetailViewComponent);
    dialogRef.componentInstance.taskId = obj.id;
    dialogRef.componentInstance.currTask = obj;
  }

}
