import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.class';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  levels: any = ['To do', 'In progress', 'Awaiting Feedback', 'Done'];
  allTasks$: Observable<Task[]>;


  constructor(
    private _firestore: AngularFirestore
  ) { 
    this.allTasks$ = _firestore.collection<Task>('tasks').valueChanges({idField: 'id'});

  }

  ngOnInit(): void {
    
  }

}
