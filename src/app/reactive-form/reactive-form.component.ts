import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.minLength(8)]],
      confirmPassword: ['', [Validators.required, this.minLength(8)]],
      address: this.fb.group({
        city: ['', [Validators.required]],
        country: ['', [Validators.required]]
      }),
      companies: this.fb.array([])
    }, { validators: [this.passwordMatch] })
  }

  submit() {
    this.markFormGroupTouched(this.form);
    console.log(this.form.value);
  }


  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
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

  minLength(length) {
    return function (control: AbstractControl): ValidationErrors {
      if (control.value.length) {
        if (control.value.length < length) {
          return {
            minimumlength: {
              actualLength: control.value.length,
              requiredLength: length
            }
          }
        }
        return null;
      } else {
        return null;
      }
    }
  }

  passwordMatch(control: AbstractControl): ValidationErrors {
    let form = control as FormGroup;
    if (form.get('confirmPassword').value && form.get('password').value) {
        if (form.get('password').value !== form.get('confirmPassword').value) {
          return {
            misMatch: true
          }
      }
    }
  }
}


// {
//   email: 'asdfghjkl'
//   password: 'sdfghjkl'
// }