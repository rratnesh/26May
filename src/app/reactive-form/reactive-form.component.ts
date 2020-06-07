import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.minLength(8), Validators.required])
    // });
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      address: this.fb.group({
        city: this.fb.control('', [Validators.required]),
        country: this.fb.control('', [Validators.required])
      }),
      companies: this.fb.array([])
    })
  }

  submit() {
    this.markFormGroupTouched(this.form);
    console.log(this.form.value);
  }

  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }

  get city() {
    return this.form.get('address').get('city');
  }

  get country() {
    return this.form.get('address').get('country');
  }

  get companies() {
    return (this.form.get('companies') as FormArray).controls;
  }

  addCompany() {
    (this.form.get('companies') as FormArray).push(this.createCompany());
  }

  createCompany() {
    return this.fb.group({
      companyName: this.fb.control('', [Validators.required])
    })
  }

  removeCompany(index) {
    (this.form.get('companies') as FormArray).removeAt(index);
  }

  markFormGroupTouched(formGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}


// {
//   email: 'asdfghjkl'
//   password: 'sdfghjkl'
// }