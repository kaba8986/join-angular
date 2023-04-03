import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.class';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  isLoading = false;
  form: FormGroup;

  constructor(
    public _dialogRef: MatDialogRef<AddContactComponent>,
    private _firestore: AngularFirestore,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      firstName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  ngOnInit(): void {}

 onSubmit() {
  console.log(this.form.value);
  /*
    if(this.form.invalid) {
      return;
    } else {
      this.createContact(this.form.value);
    }
    */
  }

  createContact(contact: Contact) {
    this.isLoading = true;
    let newContact = new Contact(contact);
    this._firestore.collection('contacts').add(newContact.toJSON());   
    this._dialogRef.close();
    this.isLoading = false;
  }

  close(): void {
    this._dialogRef.close();
  }



}
