import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldRequiredService } from '../services/field-required.service';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorities: this.fb.array([
      ['Platos', Validators.required],
    ], Validators.required)
  });

  public newItem: FormControl = this.fb.control('', [Validators.required])

  get itemArr() {
    return this.myForm.get('favorities') as FormArray
  }

  constructor(
      private fb: FormBuilder,
      private fieldRequiredService: FieldRequiredService
      ) { }

  invalidField(field: string) {    
    return this.fieldRequiredService.fieldRequiered(this.myForm, field)
    && this.fieldRequiredService.fieldTouched(this.myForm, field)
  }

  save() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
  }

  add() {
    if(this.newItem.invalid) { return;}
    this.itemArr.push(new FormControl( this.newItem.value, Validators.required ));
    // this.itemArr.push( this.fb.control( this.newItem.value ,[Validators.required]));
    this.newItem.reset(); // Resetea el valor del input
  }

  deleted(index: number) {
    this.itemArr.removeAt(index);
  }
}
