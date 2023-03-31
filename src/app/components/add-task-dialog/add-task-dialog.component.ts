import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.class';
import { Task } from 'src/app/models/task.class';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {

  loading: boolean = false;
  newTask: Task = new Task();
  minDate: Date;
  subtaskValue: string = '';
  assignments = new FormControl('');

  categories: any = ['New Category', 'General', 'Design', 'Sale', 'Backoffice'];
  // allContacts: any = ['Max Mustermann', 'Beate Beispiel'];

  allContacts$: Observable<Contact[]>;

  priorities: any = [
    { name: 'High', value: 'high', color: 'red' },
    { name: 'Middle', value: 'middle', color: 'yellow' },
    { name: 'Low', value: 'low', color: 'lime' }
  ]

  stage: number = 0;

  constructor(
    public _firestore: AngularFirestore,
    private dialogRef: MatDialogRef<AddTaskDialogComponent>
  ) { 
    this.minDate = new Date();
    this.allContacts$ = _firestore.collection<Contact>('contacts').valueChanges({idField: 'id'});
  }

  ngOnInit(): void {
    console.log(this.stage);
  }

  addSubtask(value: string) {
    if(value) {
      this.newTask.subTasks.push({text: value, checked: false});
      this.subtaskValue = '';
    }
  }

  clearForm() {
    this.newTask = new Task();
  }


  createTask() {
    this.newTask.stage = this.stage;
    this.newTask.assignments = this.assignments.value;
    this.newTask.dueDateMilli = this.newTask.dueDate.getTime();
    this.newTask.creationDateMilli = this.newTask.creationDate.getTime();
    this._firestore.collection('tasks').add(this.newTask.toJSON());   
    this.dialogRef.close();
  }

}
