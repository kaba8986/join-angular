import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { collection, deleteDoc, doc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { Contact } from 'src/app/models/contact.class';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  currContact: Contact = new Contact();
  contactId: string = "";
  db = getFirestore();

  constructor(
    private dialogRef: MatDialogRef<EditContactComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.currContact);
  }

  async updateContact() {
    const updatedContactRef = doc(collection(this.db, 'contacts'));
    await deleteDoc(doc(this.db, 'contacts', this.contactId));
    await setDoc(updatedContactRef, this.currContact);
    this.dialogRef.close();
  }

}
