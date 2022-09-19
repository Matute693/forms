import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FieldRequiredService {
  
  fieldRequiered(form: FormGroup, field: string) {
    return form?.controls[field]?.invalid
  }
  fieldTouched(form: FormGroup, field: string) {
    return form?.controls[field]?.touched
  }

}
