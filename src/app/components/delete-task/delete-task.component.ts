import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';


@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {

  taskId: string = "";
  db = getFirestore();

  constructor(
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
  }

  async deleteTask() {
    await deleteDoc(doc(this.db, 'tasks', this.taskId));
    this.dialogRef.closeAll();
  }

}
