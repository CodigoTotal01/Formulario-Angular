import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles:[
    `
    li{
      cursor: pointer;
    }
    `

  ]

})
export class SwitchesComponent  {


  persona={
    genero: "F",
    notificaciones: false
  }


  terminosYCondiciones = false;
}
