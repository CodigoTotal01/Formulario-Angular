import { Component } from '@angular/core';

interface MenuItem{
  text: string;
  ruta:string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {

  templateMenu: MenuItem[]=[
    {
      text:"Basico",
      ruta: "./template/basicos"
    },
    {
      text:"Dinamicos",
      ruta: "./template/dinamicos"
    },
    {
      text:"Switches",
      ruta: "./template/switches"
    },
  ]




  reactiveMenu: MenuItem[]=[
    {
      text:"Basico",
      ruta: "./reactive/basicos"
    },
    {
      text:"Dinamicos",
      ruta: "./reactive/dinamicos"
    },
    {
      text:"Switches",
      ruta: "./reactive/switches"
    },
  ]


  authMenu: MenuItem[]=[
    {
      text:"Login",
      ruta: './auth/login'
    },
    {
      text:"Registro",
      ruta: './auth/registro'
    }
  ]
}
