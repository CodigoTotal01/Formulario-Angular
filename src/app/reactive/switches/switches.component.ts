import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit{

  //definicion de formulario 
  miFormulario: FormGroup = this.fb.group({
    genero:['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue] //para que sea obligaroio que est sea cierto 
  });
 
  persona = {
    genero: "F",
    notificaciones: true,
  }
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    //! subvcribirce al campo de los cformularios 
    this.miFormulario.reset({
      ...this.persona, condiciones: true }// puedes parsarle eel objeto tal cual 
    );


   /* this.miFormulario.get('condiciones')?.valueChanges.subscribe(
      condicion => {
        console.log(condicion)
      }
    );*/


      //los demas arcumentos caen en el rest _> aunqeu peude ser cualuqiernombre 
    this.miFormulario.valueChanges.subscribe(({condiciones, ...rest})=> { //apenas se cambie algo en el formulario -> tabien a un control en especifico
      //delete form.condiciones;
      
      console.log(rest) //obtenmos todos los valores apenas se modifica algo 
    })

  }



  //eswtablecer informacion de una en el onInit 


  agregar(){
    const formValue = {...this.miFormulario.value}

    delete formValue.condiciones;
    this.persona = formValue;
    console.log( this.persona )
  }

}
