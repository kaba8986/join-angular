import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.class';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';

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

  }

  getDate(millis: number) {
    return new Date(millis);
  }

  openDeleteDialog(obj: any) {
    const dialogRef = this.dialog.open(DeleteTaskComponent);
    dialogRef.componentInstance.taskId = obj.id;
  }

  openEditDialog(obj: any) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(EditTaskComponent);
    dialogRef.componentInstance.currTask = obj;
    dialogRef.componentInstance.taskId = obj.id;
  }

}
