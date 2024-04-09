import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './site/pets/pets.component';
import { HomeComponent } from './site/home/home.component';
import { WorksComponent } from './site/works/works.component';
import { ContactComponent } from './site/contact/contact.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'works', component: WorksComponent },
  { path: 'contact', component: ContactComponent },
  { path : 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
