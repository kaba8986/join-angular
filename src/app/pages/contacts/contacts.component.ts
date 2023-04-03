import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from 'src/app/components/add-contact/add-contact.component';
import { Contact } from 'src/app/models/contact.class';

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Router } from '@angular/router';
import { DeleteContactComponent } from 'src/app/components/delete-contact/delete-contact.component';
import { EditContactComponent } from 'src/app/components/edit-contact/edit-contact.component';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

 allContacts$: Observable<Contact[]>;

 currContact: any = "";
 
 /*
 currContact: any = {
  firstName: 'Paula',
  lastName: 'Schneider',
  email: 'paula-s1988@web.de',
  phone: '0123 456 7890'
 };
 */

  constructor(
    public dialog: MatDialog,
    private _firestore: AngularFirestore,
    public router: Router
  ) { 
    this.allContacts$ = _firestore.collection<Contact>('contacts').valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddContactComponent);
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteContactComponent);
    dialogRef.componentInstance.contactId = this.currContact.id;
  }

  openEditDialog(obj: any) {
    const dialogRef = this.dialog.open(EditContactComponent);
    dialogRef.componentInstance.currContact = obj;
    dialogRef.componentInstance.contactId = obj.id;
  }

  showContact (obj: any) {
   this.currContact = obj;
  }

  close() {
    this.currContact = "";
  }
}
