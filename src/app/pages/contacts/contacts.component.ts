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
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  allContacts$: Observable<Contact[]>;
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );

  currContact: any = "";


  constructor(
    public dialog: MatDialog,
    private _firestore: AngularFirestore,
    public router: Router,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.allContacts$ = _firestore.collection<Contact>('contacts', ref => ref.orderBy('lastName')).valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(AddContactComponent, {
      maxWidth: '100vw'
    });
    const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
      if (size.matches) {
        dialogRef.updateSize('100vw', '100vh');
      } 
    });
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

  showContact(obj: any) {
    this.currContact = obj;
  }

  close() {
    this.currContact = "";
  }
}
