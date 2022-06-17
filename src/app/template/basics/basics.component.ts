import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  
  @ViewChild('myForm') myForm!: NgForm;
  
  public initForm = {
    product: '',
    price: 0,
    stock: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  save(): void {
    console.log('Send succesfully');
    this.myForm.resetForm({
      price: 0,
      stock: 0
    });
  }

  productValue( ): boolean {
    return this.myForm?.controls['products']?.invalid
    && this.myForm?.controls['products']?.touched;
   }

  priceValue( ): boolean {
   return this.myForm?.controls['price']?.touched 
          && this.myForm?.controls['price']?.value < 0;
  }

  stockValue( ): boolean {
    return this.myForm?.controls['stock']?.touched 
           && this.myForm?.controls['stock']?.value < 0;
 
   }

}
