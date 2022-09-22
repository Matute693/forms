import { Injectable } from '@angular/core';
import { ValidationErrors, FormControl, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  // Puedo poner validaciones asincronas siempre y cuando no dependan del http.

  public nameSurnamePattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern       : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  canBeStrider( control: FormControl): ValidationErrors | null {
    const value = control.value?.trim().toLowerCase();
    if(value === 'strider') {
      //ERROR!!
      return {
        noStrider:true
      }
    }
    return null; //THERE ISN'T ERROR
  }

  sameField(realPassword: string, confirmedPassword: string) {
    
    return ( formGroup: AbstractControl): ValidationErrors | null => {

      const password = formGroup.get(realPassword)?.value;
      const confirmPassword = formGroup.get(confirmedPassword)?.value;

      if(password !== confirmPassword) {
        formGroup.get(confirmedPassword)?.setErrors({ notSame: true })
        return { notSame: true }
      }

      formGroup.get(confirmedPassword)?.setErrors(null);

      return null;
    }
  }

}
