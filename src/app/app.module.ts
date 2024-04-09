import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { PetsComponent } from './site/pets/pets.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './site/home/home.component';
import { ContactComponent } from './site/contact/contact.component';
import { WorksComponent } from './site/works/works.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetsComponent,
    HomeComponent,
    ContactComponent,
    WorksComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
