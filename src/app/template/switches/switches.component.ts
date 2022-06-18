import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

 public person = {
   gender: '',
   notifications: true
 }

 public term: boolean = false;
}
