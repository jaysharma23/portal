
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      dob: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      school: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    // Build the reactive form with validators
      }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Registration Successful', this.registrationForm.value);
      // Handle your form submission logic here (API call, routing, etc.)
    } else {
      console.log('Form is invalid!');
      // Optionally mark all controls as touched to display validation errors
      this.registrationForm.markAllAsTouched();
    }
  }
}