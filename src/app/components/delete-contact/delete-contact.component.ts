import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { deleteDoc, doc, getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss']
})
export class DeleteContactComponent implements OnInit {

  contactId: string = "";
  db = getFirestore();

  constructor(
    private dialogRef: MatDialogRef<DeleteContactComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.contactId);
  }

  async deleteContact() {
    await deleteDoc(doc(this.db, 'contacts', this.contactId));
    this.dialogRef.close();
  }

}
