import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent implements OnInit{

  // myForm: FormGroup = new FormGroup({
  //   'name':   new FormControl('Wood'),
  //   'price':  new FormControl('195'),
  //   'stock':  new FormControl('23'),
  // });
  
  myForm: FormGroup = this.fb.group({
    // name: ['Valor por defecto', Validaciones sincronas, Validaciones asincronas ]
    name: [, [ Validators.required, Validators.minLength(3)] ],
    price: [, [ Validators.required, Validators.min(0)] ],
    stock: [, [Validators.required, Validators.min(0)]]
  })
  
  constructor( private fb: FormBuilder) {}
  
  ngOnInit(): void {
  }

  invalidPriceField(field: string) {
    return this.myForm.controls[field]?.errors
        && this.myForm.controls[field]?.touched
  }

  save() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return
    }
    console.log(this.myForm.value)
    this.myForm.reset();
  }
}
