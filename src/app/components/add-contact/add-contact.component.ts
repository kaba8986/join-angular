import { Component, OnInit } from '@angular/core';
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
    public _dialogRef: MatDialogRef<AddContactComponent>
  ) { }

  ngOnInit(): void {
  }

  async createContact() {

  }

  close(): void {
    this._dialogRef.close();
  }

}
