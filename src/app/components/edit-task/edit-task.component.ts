import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contact } from 'src/app/models/contact.class';
import { Task } from 'src/app/models/task.class';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  loading: boolean = false;
  currTask: Task = new Task();
  minDate: Date;
  date;
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

  constructor(
    public _firestore: AngularFirestore,
    private dialogRef: MatDialogRef<EditTaskComponent>
  ) { 
    this.minDate = new Date();
    this.allContacts$ = _firestore.collection<Contact>('contacts').valueChanges({idField: 'id'});
    this.date = new FormControl(new Date(this.currTask.dueDateMilli));
  }

  ngOnInit(): void {
    
  }

  addSubtask(value: string) {
    if(value) {
      this.currTask.subTasks.push({text: value, checked: false});
      this.subtaskValue = '';
    }
  }

  saveTask() {
    this.currTask.assignments = this.assignments.value;
    if(this.currTask.dueDate) {
      this.currTask.dueDateMilli = this.currTask.dueDate.getTime();
    }
    this._firestore.collection('tasks').add(this.currTask.toJSON());   
    this.dialogRef.close();
  }

}
