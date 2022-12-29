import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';


//recuerda importarlos en sus respectivos modulos prinples 
const routes: Routes = [
  {

    path: '', //lo brinda el padre 
    children:[
    {path: 'basicos', component:BasicosComponent},
    {path: 'dinamicos', component:DinamicosComponent},
    {path: 'switches', component:SwitchesComponent},
    //*Cualquier otra ruta
    {path: '**', redirectTo: 'basicos'}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
