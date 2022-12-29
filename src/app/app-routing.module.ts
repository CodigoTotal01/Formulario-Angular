import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateModule } from './template/template.module';
import { ReactiveModule } from './reactive/reactive.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path:'template',
    loadChildren:()=>import('./template/template.module').then(m=>m.TemplateModule)
  },

  {
    path:'reactive',
    loadChildren:()=>import('./reactive/reactive.module').then(m=>m.ReactiveModule) // importamos siempre el modulo que importe el modulo de las rutas 

  },

  {
    path:"auth",
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },

  {
path:"**",
redirectTo: "template"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//! Basicamente, los padres al emplear a los hijos usan LazyLoad -> nada dificil 
//https://angular.io/guide/lazy-loading-ngmodules
export class AppRoutingModule { }
