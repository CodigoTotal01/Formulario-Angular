import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',

})
export class BasicosComponent implements OnInit {

  // uindicar formulario
  /*miFormulario:FormGroup = new FormGroup({
    nombre      : new FormControl('RTX 4080ti'),
    precio      : new FormControl(1500),
    existencias : new FormControl(50),
  })*/


  //! Validadores incronos de disparan al toke
  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.minLength(3)]], //automaticamente indica que debemos rellenarlo 
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]],
  });
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    //establecer valor al formulario , setValue mejor el reset 
    this.miFormulario.reset({

      nombre: "Gatitos ", //automaticamente indica que debemos rellenarlo 
      precio: 12,
      existencias: 10, //! pero si le falta una propiedad revienta 

    });
  }


  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if (this.miFormulario.invalid) {
      //msotrar que todos fueron tocados 
      this.miFormulario.markAllAsTouched();

      //asi de simple escupe los errores 
      return;
    }


    console.log("0formulario cuardado ")
    this.miFormulario.reset();
  }
}


