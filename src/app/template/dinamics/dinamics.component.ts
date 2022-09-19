import { Component, ViewChild } from '@angular/core';
import { User, Favs } from './interfaces/dinamics.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  @ViewChild('myForm') myForm!: FormGroup;
  public item: string = '' 

  public user: User = {
    name: '',
    favorities: []
  }
  
  deleted(index: number) {
    this.user.favorities.splice(index, 1);
  }

  add() {
    const newItem: Favs = {
      id: this.user.favorities.length + 1,
      name: this.item
    }
    this.user.favorities.push({ ...newItem });
    this.item = '';
  }

  save():void {
    console.group('Save', this.myForm.value);
  }


}
