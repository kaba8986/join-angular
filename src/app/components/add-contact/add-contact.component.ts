import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.class';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {


  newContact: Contact = new Contact();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  async createContact() {

  }

}
