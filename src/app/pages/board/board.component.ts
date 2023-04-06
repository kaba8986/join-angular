import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.class';
import { DatePipe } from '@angular/common';
import { MatDialog} from '@angular/material/dialog';
import { AddTaskDialogComponent } from 'src/app/components/add-task-dialog/add-task-dialog.component';
import { TaskDetailViewComponent } from 'src/app/components/task-detail-view/task-detail-view.component';
import { DataService } from 'src/app/services/data.service';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  levels: any = ['To do', 'In progress', 'Awaiting Feedback', 'Done'];
  allTasks$: Observable<Task[]>;
  allTasks: any = [];
  filteredTasks: any = []
  tasksStage0$: any;
  tasksStage1$: any;
  tasksStage2$: any;
  tasksStage3$: any;
  today = new Date().getTime();

  searchTerm: string;

  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );


  constructor(
    private _firestore: AngularFirestore,
    private dialog: MatDialog,
    public _ds: DataService,
    private readonly breakpointObserver: BreakpointObserver
  ) { 
    this.allTasks$ = this._ds.getAllTasks();

    this.tasksStage0$ = this._ds.getTasksByStage(0);
    this.tasksStage1$ = this._ds.getTasksByStage(1);
    this.tasksStage2$ = this._ds.getTasksByStage(2);
    this.tasksStage3$ = this._ds.getTasksByStage(3);

  }

  ngOnInit(): void {}


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  getDropList(index: number) {
    return `tasksStage${index}`;
  }

  /*
  filterByTerm(value: string) {
    let filteredTasks:any = [];
    this.allTasks$.forEach((array: any) => {
      array.forEach((task: any) => {
          if(JSON.stringify(Object.values(task)).toLowerCase().includes(value)) {
            filteredTasks.push(task);
          };
      });
    })
    this.allTasks$ = filteredTasks;
  }
  */


  getDate(millis: number) {
    return new Date(millis);
  }

  openDialog(stage: number) {
    // const dialogRef = this.dialog.open(AddTaskDialogComponent);

    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      maxWidth: '100vw'
    });
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        dialogRef.updateSize('100vw', '100vh');
      } 
    });

    dialogRef.afterClosed().subscribe(() => {
      smallDialogSubscription.unsubscribe();
    });

    dialogRef.componentInstance.stage = stage;
  }

  openDetailView(obj: any) {

    const dialogRef = this.dialog.open(TaskDetailViewComponent, {
      maxWidth: '100vw'
    });
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        dialogRef.updateSize('100vw', '100vh');
      } 
    });

    dialogRef.componentInstance.taskId = obj.id;
    dialogRef.componentInstance.currTask = obj;
  }

}
