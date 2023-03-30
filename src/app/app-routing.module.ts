import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { BoardComponent } from './pages/board/board.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ImpressComponent } from './pages/impress/impress.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  {path: 'summary', component: SummaryComponent},
  {path: 'board', component: BoardComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/:id', component: ContactDetailsComponent},
  {path: 'impress', component: ImpressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
