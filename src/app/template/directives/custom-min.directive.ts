import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[customMin][ngModel]', //como decir quie suse mi cosa personalizada 
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator { //implementa el validator -> viene con angular para el ming leng y demas 
    

    @Input() minimo!: number; //recivirlo del padre -> 

    constructor() {}

    validate( control: FormControl ) {
        const inputValue = control.value;
        return ( inputValue < this.minimo )
                ? { 'customMin': true }
                : null;
    }

}