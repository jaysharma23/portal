import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';



  const routes: Routes = [
    // When user navigates to /registration, load RegistrationComponent.
    { path: 'registration', component: RegistrationFormComponent },
  
    // When nothing is provided in the URL, load the HomeComponent into router-outlet.
    
    
    // Optional: A wildcard route to catch undefined paths.
    { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
