import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from 'src/app/components/add-contact/add-contact.component';
import { Contact } from 'src/app/models/contact.class';

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  allContacts$: Observable<Contact[]>;


  constructor(
    public dialog: MatDialog,
    private _firestore: AngularFirestore
  ) { 
    this.allContacts$ = _firestore.collection<Contact>('contacts').valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddContactComponent);
  }

  show (obj: any) {
   console.log(obj.id);
  }
}
