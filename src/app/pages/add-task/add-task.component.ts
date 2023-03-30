import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/models/task.class';

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
  allContacts: any = ['Max Mustermann', 'Beate Beispiel'];

  priorities: any = [
    { name: 'High', value: 'high', color: 'red' },
    { name: 'Middle', value: 'middle', color: 'yellow' },
    { name: 'Low', value: 'low', color: 'lime' }
  ]


  constructor() {
    this.minDate = new Date();
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
    console.log(this.newTask);
  }


}
