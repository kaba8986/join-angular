import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { BoardComponent } from './pages/board/board.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ImpressComponent } from './pages/impress/impress.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PasswordForgottenComponent } from './pages/password-forgotten/password-forgotten.component';
import { ResetSuccessComponent } from './pages/reset-success/reset-success.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'board', component: BoardComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/:id', component: ContactsComponent},
  {path: 'impress', component: ImpressComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'password-forgotten', component: PasswordForgottenComponent},
  {path: 'password-resetted', component: ResetSuccessComponent},
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
