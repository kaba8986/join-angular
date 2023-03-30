import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { doc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Contact } from '../models/contact.class';
import { Task } from '../models/task.class';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contactsRef: AngularFirestoreCollection<Contact>;
  tasksRef: AngularFirestoreCollection<Task>;

  constructor(
    private _db: AngularFirestore
  ) { 
    this.contactsRef = _db.collection('contacts');
    this.tasksRef = _db.collection('tasks');
  }

  /*

  delete(collectionRef: string, id: string): Promise<void> {
    return collectionRef.doc(id).delete();
  }
  */
}
