import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //TODO: Temporalmente a otro lugar

  public myForm: FormGroup = this.fb.group({
    // property: [ Valor del campo, [Todas las validaciones sincronas], [ Validaciones asincronas ]]
    name: ['', [Validators.required, Validators.pattern(this.vs.nameSurnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.canBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [this.vs.sameField('password', 'confirmPassword')]
  });


  get emailErrorMessage(): string {
    const errors = this.myForm.get('email')?.errors;
    if( errors?.['required'] ) {
      return 'Mandatory email.'
    } else if (errors?.['pattern']) {
      return 'The value entered does not have an email format.'
    } else if ( errors?.['takenEmail'] ) {
      return 'Existing email.';
    }
    return '';
  }

  constructor(private fb: FormBuilder,
              private vs: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Matias Michelli',
      email: 'test1@test.com',
      username: 'Matute693',
      password: '123456',
      confirmPassword: '123456'
    })
  }

  
  fieldNovalid( field: string ) {
    return this.myForm.get(field)?.invalid
    && this.myForm.get(field)?.touched;
  }

  submitForm() {

    console.log(this.myForm.value)
    
    this.myForm.markAllAsTouched();
  }

}
