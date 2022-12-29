import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { emailPattern } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registtro',
  templateUrl: './registtro.component.html',
  styleUrls: ['./registtro.component.css']
})
export class RegisttroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator.validate]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]], //solo define el metodo no lo ejecutes ya 
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]], 

  }, // opciones al form frouup -> abstiand  -> validators sincrono -> leer e n tiempo real 
  {
    Validators: [this.validatorService.camposIguales('password', 'password2')]
  }
  
  );

  constructor(private fb: FormBuilder,
     private validatorService: ValidatorService,
     private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset(
      {
        nombre: 'Palacios Christian',
        email: "test1@test.com",
        username: "Binario_01"
      }
    )
  }
  campoNoValido(campo: string){
    ///si el campo no existe  espere
    return this.miFormulario.get(campo)?.invalid
    && this.miFormulario.get(campo)?.touched;
  }


  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
