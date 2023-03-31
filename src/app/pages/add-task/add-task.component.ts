import { Component, OnInit} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.class';
import { Task } from 'src/app/models/task.class';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

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


  constructor(
    public _firestore: AngularFirestore
  ) {
    this.minDate = new Date();
    this.allContacts$ = _firestore.collection<Contact>('contacts').valueChanges({idField: 'id'});
  }

  ngOnInit(): void {
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
    this.newTask.assignments = this.assignments.value;
    this.newTask.dueDateMilli = this.newTask.dueDate.getTime();
    this.newTask.creationDateMilli = this.newTask.creationDate.getTime();
    this._firestore.collection('tasks').add(this.newTask.toJSON());   
  }


}
