import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisttroComponent } from './pages/registtro/registtro.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "registro",
        component: RegisttroComponent,
      },
      
      {
        path:"**",
        redirectTo: "registro"
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
