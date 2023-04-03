import { Component, OnInit} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.class';
import { Task } from 'src/app/models/task.class';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskAddedSnackComponent } from 'src/app/components/task-added-snack/task-added-snack.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  loading: boolean = false;
  newTask: Task = new Task();
  minDate: Date;
  hasDueDate: boolean = false;
  subtaskValue: string = '';
  assignments = new FormControl('');

  categories: any = ['New Category', 'General', 'Design', 'Sale', 'Backoffice'];

  allContacts$: Observable<Contact[]>;

  priorities: any = [
    { name: 'High', value: 'high', color: 'red' },
    { name: 'Middle', value: 'middle', color: 'yellow' },
    { name: 'Low', value: 'low', color: 'lime' }
  ]


  constructor(
    public _firestore: AngularFirestore,
    private _snackBar: MatSnackBar
  ) {
    this.minDate = new Date();
    this.allContacts$ = _firestore.collection<Contact>('contacts').valueChanges({idField: 'id'});
  }

  ngOnInit(): void {
  }

  addSubtask(value: string) {
    if(value) {
      this.newTask.subTasks.push(value);
      this.subtaskValue = '';
    }
    console.log(this.newTask);
  }

  removeSubtask(i: number) {
    this.newTask.subTasks.splice(i, 1);
  }

  openSnackBar() {
    this._snackBar.openFromComponent(TaskAddedSnackComponent, {
      duration: 3000,
    });
  }

  clearForm() {
    this.newTask = new Task();
  }

  onSubmit() {
    if(this.newTask.title && this.newTask.description) {
      this.createTask();
    } else {
      return;
    }
  }

  createTask() {
    this.loading = true;
    this.newTask.assignments = this.assignments.value;
    if(this.hasDueDate) {
      this.newTask.dueDateMilli = this.newTask.dueDate.getTime();
    } else {
      this.newTask.dueDate = '[no Due Date]'; 
    }
    this.newTask.creationDateMilli = this.newTask.creationDate.getTime();
    this._firestore.collection('tasks').add(this.newTask.toJSON());   
    this.loading = false;
    this.openSnackBar();
  }



}
