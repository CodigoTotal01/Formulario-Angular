import { FormControl } from '@angular/forms';
   //TODO: Temporal + cualquie cantidad de caracteres 
   export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
   export const emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
 
 

  //es sincrona
  export const noPuedeSerStrider = (control: FormControl)  => {
    const valor = control.value?.trim().toLowerCase();


    if(valor === 'strider'){ //para palabrotas
      //retun error
      return{  //retotno de un bojeto se considera un error
        noStrider: true,
      }
    }

    return null; //indicamos que no hay un solo error en este campo - control 
  }
