import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { retry } from 'rxjs';


interface Persona {
  nombre: string;
  favoritos: Favorito[]


}


interface Favorito {
  id: number;
  nombre: string;
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.minLength(3)]], //automaticamente indica que debemos rellenarlo 
    favoritos: this.fb.array([
      //form builder
      ["kojima"], 
      ["tu vieja"]
    ], Validators.required), //por lo menos debe hacer un favorito si no daria que no es valido 
  });


  //cuando se queire un control sencilo puedes crearlo aparte 

//control valor del formulari, recuerda que este no forma parte del formulario -> en tu input puedes ponerlo como [formControlName]  para hacer refeerncia a mi objeto 
  nuevoFavorito:FormControl = this.fb.control('', Validators.required);
//!enlazalo al input 
  constructor(private fb: FormBuilder) { }


  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray; //simplement le decimso que es un form array 
  }
  ngOnInit(): void {
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

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }


//no neceisto mandarlo porque ya lo tengo gravado en el form controll
  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
return;
    }


    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))


  }


  eliminar(i : number){
    //remueve algo de la posicion infice del form 
    this.favoritosArr.removeAt(i);

  }
}
