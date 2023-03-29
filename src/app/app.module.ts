import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material/material.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { BoardComponent } from './pages/board/board.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ImpressComponent } from './pages/impress/impress.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddContactComponent } from './components/add-contact/add-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SummaryComponent,
    BoardComponent,
    AddTaskComponent,
    ContactsComponent,
    ImpressComponent,
    AddContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
