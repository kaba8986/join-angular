//MODULES
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';
import { NgModule } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


//COMPONENTS
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { BoardComponent } from './pages/board/board.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ImpressComponent } from './pages/impress/impress.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';

//FIREBASE
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AddTaskDialogComponent } from './components/add-task-dialog/add-task-dialog.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { TaskDetailViewComponent } from './components/task-detail-view/task-detail-view.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PasswordForgottenComponent } from './pages/password-forgotten/password-forgotten.component';
import { SuccessComponent } from './pages/success/success.component';
import { ResetSuccessComponent } from './pages/reset-success/reset-success.component';
import { TaskAddedSnackComponent } from './components/task-added-snack/task-added-snack.component';
import { AccordeonComponent } from './pages/accordeon/accordeon.component';
import { FilterPipe } from './pipes/filter.pipe';






@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SummaryComponent,
    BoardComponent,
    AddTaskComponent,
    ContactsComponent,
    ImpressComponent,
    AddContactComponent,
    DeleteContactComponent,
    EditContactComponent,
    AddTaskDialogComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    TaskDetailViewComponent,
    LoginComponent,
    SignupComponent,
    PasswordForgottenComponent,
    SuccessComponent,
    ResetSuccessComponent,
    TaskAddedSnackComponent,
    AccordeonComponent,
    FilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [AngularFirestore, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
