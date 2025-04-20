import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AppBodyComponent, AboutusComponent, RegistrationFormComponent, ServicesComponent, ContactusComponent],
  imports: [
    BrowserModule,
    RouterModule, FormsModule,AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
