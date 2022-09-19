import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: ['M', [Validators.required]],
    notifications: [true , [Validators.requiredTrue]],
    terms: [ false, [Validators.requiredTrue]]
  });

  user: any = {
   gender: 'F',
   notifications: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.myForm.reset( {
        ...this.user,
        terms: false
      });
      this.myForm.valueChanges.subscribe( ({notifications, ...rest}) => {
        // delete form.notifications;
        this.user = rest
      });
  }

  save() {
    const formValue = {...this.myForm.value};
    delete formValue.notifications;
    this.user = formValue;
  }
}
