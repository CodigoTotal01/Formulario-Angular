import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

 nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
   emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  //es sincrona
   noPuedeSerStrider = (control: FormControl): ValidationErrors | null  => {
    const valor = control.value?.trim().toLowerCase();


    if(valor === 'strider'){ //para palabrotas
      //retun error
      return{  //retotno de un bojeto se considera un error
        noStrider: true,
      }
    }

    return null; //indicamos que no hay un solo error en este campo - control 
  }


  camposIguales(campo1: string, campo2: string){ //! no de ejecutan -> solo envia la referencia  -< retorna una funcion 


    return(formGroup:AbstractControl):ValidationErrors | null =>{
    //que contiene control -> es un form group -> de dispara varias veces porque cuando cambia un formulario 
      const pass1  = formGroup.get(campo1)?.value;
      const pass2  = formGroup.get(campo2)?.value;


      //cualquier tipo de objeto que se envie se considerara error
      if(pass1 !== pass2){
        formGroup.get(campo2)?.setErrors({
          noIguales: true,
        });
        return {
          noIguales: true,
        }
      }


      //! cuidado porque purga todos los errores que este tenga 

      formGroup.get(campo2)?.setErrors(null);


      return null;
    }
  }



  constructor() { }
}
