import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
    selector: '[customDir][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomDirective,
        multi: true
    }]
})

export class CustomDirective implements Validators {
@Input() minimo!: number;

constructor() {}

    validate(control: FormControl) {
        const inputValue =  control.value;
        return (inputValue < this.minimo )
                ? {'customDir': true}
                : null;
    }

}