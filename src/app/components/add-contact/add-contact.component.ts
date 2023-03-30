import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.class';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {


  newContact: Contact = new Contact();

  constructor(
    public _dialogRef: MatDialogRef<AddContactComponent>,
    private _firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
  }

  async createContact() {
    this._firestore.collection('contacts').add(this.newContact.toJSON());   
    this._dialogRef.close();
  }

  close(): void {
    this._dialogRef.close();
  }

}
