import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contact } from 'src/app/models/contact.class';
import { Task } from 'src/app/models/task.class';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { collection, deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore';





@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  providers: []
})
export class EditTaskComponent implements OnInit {

  loading: boolean = false;
  currTask: Task = new Task();
  taskId: string = '';
  minDate: Date;
  hasDueDate: boolean = false;
  defaultValue: Date;
  subtaskValue: string = '';
  assignments = new FormControl('');
  db = getFirestore();
  customCategorySelected: boolean = false;
  newCategory: string = '';

  categories: any = ['General', 'Design', 'Sale', 'Backoffice'];

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
    this.allContacts$ = _firestore.collection<Contact>('contacts').valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {
    console.log(this.currTask);
    if(this.currTask.dueDateMilli != 0) {
      this.defaultValue = new Date(this.currTask.dueDateMilli);
    }
  }

  addSubtask(value: string) {
    if (value) {
      this.currTask.subTasks.push(value);
      this.subtaskValue = '';
    }
  }

  removeSubtask(i: number) {
    this.currTask.subTasks.splice(i, 1);
    console.log(this.currTask);
  }

  addNewCategory() {
    if(this.newCategory) {
      this.categories.push(this.newCategory);
      this.customCategorySelected = false;
    }
  }

  onSubmit() {
    if (this.currTask.title && this.currTask.description) {
      this.updateTask();
    } else {
      return;
    }
  }


  async updateTask() {
    this.loading = true;
    this.currTask.assignments = this.assignments.value;
    this.currTask.dueDate = this.defaultValue

    //calc millis only if duedate exists  
    if(this.currTask.dueDate != null) {
      this.currTask.dueDateMilli = this.currTask.dueDate.getTime();
    } else {
      this.currTask.dueDateMilli = 0; 
    }
    
    const updatedTaskRef = doc(collection(this.db, 'tasks'));
    await deleteDoc(doc(this.db, 'tasks', this.taskId));
    await setDoc(updatedTaskRef, this.currTask);
    this.dialogRef.close();
    this.loading = false;
    
  }

}
