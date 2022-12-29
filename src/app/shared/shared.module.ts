import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Personales
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ReactiveRoutingModule } from '../reactive/reactive-routing.module';



@NgModule({
  declarations: [
    SidemenuComponent, //*Recuerda: usar componente fuera -> exports -> usar html
  ],exports: [
    SidemenuComponent
  ],

  imports: [
    CommonModule,
    RouterModule, //? permite redirigir a las paginas que queramos sin refrescar la pagina
   
  ]
})
export class SharedModule { }
