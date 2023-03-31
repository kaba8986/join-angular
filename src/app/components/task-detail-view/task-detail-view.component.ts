import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.class';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';

@Component({
  selector: 'app-task-detail-view',
  templateUrl: './task-detail-view.component.html',
  styleUrls: ['./task-detail-view.component.scss']
})
export class TaskDetailViewComponent implements OnInit {

  taskId: string = "";
  currTask: Task = new Task();
  today = new Date().getTime();

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.currTask);
  }

  getDate(millis: number) {
    return new Date(millis);
  }

  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteTaskComponent);
    dialogRef.componentInstance.taskId = obj.id;
    console.log(this.currTask);
  }

  openEditDialog(obj: any) {
    
  }

}
