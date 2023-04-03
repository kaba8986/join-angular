import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  isLoading = false;
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditContactComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.currContact);
    this.form = this.formBuilder.group({
      firstName: [this.currContact.firstName],
      lastName: [this.currContact.lastName, Validators.required],
      email: [this.currContact.email, [Validators.required, Validators.email]],
      phone: [this.currContact.phone]
    });
  }

  onSubmit() {
    if(this.form.invalid) {
      return;
    } else {
      this.updateContact(this.form.value)
    }
  }

  async updateContact(obj: Contact) {
    this.isLoading = true;
    let newContact = new Contact(obj);
    const updatedContactRef = doc(collection(this.db, 'contacts'));
    await deleteDoc(doc(this.db, 'contacts', this.contactId));
    await setDoc(updatedContactRef, newContact.toJSON());
    this.dialogRef.close();
    this.isLoading = true;

    window.location.reload();

  }
}
