import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  //to redirect Automatically
  {
    path: '',
    redirectTo: '/contacts/admin',
    pathMatch: 'full',
  },
  //path for contactManager
  {
    path: 'contacts/admin',
    component: ContactManagerComponent,
  },
  //path for addContact
  {
    path: 'contacts/add',
    component: AddContactComponent,
  },
  //path for update contact
  {
    path: 'contacts/update/:contactId',
    component: UpdateContactComponent,
  },
  //path for view contact
  {
    path: 'contacts/view/:contactId',
    component: ViewContactComponent,
  },
  //PagenotFoundComponent
  {
    path: '**',
    component: PagenotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
