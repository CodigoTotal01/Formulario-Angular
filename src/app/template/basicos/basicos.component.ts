
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  //!El formulario seguira siendo valido aunqque no halla conteido porque siempr ttendra un string vacio por defecto 

  //! Obtener una referencia local del html 
  @ViewChild('miFormulario') miFormulario!: NgForm;


  initForm= {
    producto: "RTX 480ti",
    precio: 10,
    existencias: 10
  }
  constructor() { }

  ngOnInit(): void {
  }



  nombreValido(): boolean {
    //controls undefined -> daerror> ? si existe agrega esto  -> 
    return this.miFormulario?.controls.precio?.invalid && this.miFormulario?.controls.producto?.touched
  }

  precioValido(): boolean {
    return this.miFormulario?.controls.precio?.touched &&
      this.miFormulario?.controls.precio?.value < 0
  }
  guardar() {
    this.miFormulario.resetForm(
      {
        precio: 0,
        existencias: 0
      });
  }
 

}
