import { Component, OnInit} from '@angular/core';
import { Task } from 'src/app/models/task.class';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  loading: boolean = false;
  minDate: Date;

  newTask: Task = new Task();

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
      console.log(value);
      
    }
  }

  clearInput() {
    let input = document.querySelector('.subtask-input');
  }

}
