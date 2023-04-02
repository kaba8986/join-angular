import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contact } from 'src/app/models/contact.class';
import { Task } from 'src/app/models/task.class';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { collection, deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  loading: boolean = false;
  currTask: Task = new Task();
  taskId: string = '';
  minDate: Date;
  date: FormControl;
  subtaskValue: string = '';
  assignments = new FormControl('');
  db = getFirestore();

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
    this.date = new FormControl(new Date());
  }

  ngOnInit(): void {
    console.log(this.currTask);
  }

  addSubtask(value: string) {
    if(value) {
      this.currTask.subTasks.push(value);
      this.subtaskValue = '';
    }
  }

  removeSubtask(i: number) {
    this.currTask.subTasks.splice(i, 1);
    console.log(this.currTask);
  }

 async saveTask() {
    this.currTask.assignments = this.assignments.value;
    if(this.currTask.dueDate) {
      this.currTask.dueDateMilli = this.currTask.dueDate.getTime();
    }

    const updatedTaskRef = doc(collection(this.db, 'tasks'));
    await deleteDoc(doc(this.db, 'contacts', this.taskId));
    await setDoc(updatedTaskRef, this.currTask);
    this.dialogRef.close();
  }

}
