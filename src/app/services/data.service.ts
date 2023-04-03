import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, getFirestore, query, where } from "firebase/firestore";




@Injectable({
  providedIn: 'root'
})
export class DataService {

  db = getFirestore();

  constructor(
    private _fs: AngularFirestore
    ) {}

  getDaytime() {
    let date = new Date();
    let currHours = date.getHours();
    if(currHours >=2 && currHours <=12) {
      return 'Morning';
    } else if (currHours >12 && currHours <=18) {
      return 'Afternoon';
    } else {
      return 'Evening'
    }
  }

  getAllTasks() {
    return this._fs.collection<Task>('tasks').valueChanges({idField: 'id'});
  }

  getTasksByStage(stage: number) {
    const tasksRef = collection(this.db, "tasks");
    return query(tasksRef, where('stage', '==', stage));
  }

}
