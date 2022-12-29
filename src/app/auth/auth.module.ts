import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisttroComponent } from './pages/registtro/registtro.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisttroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, //!expreciones regulares -> formulario
    ReactiveFormsModule
  ],

})
export class AuthModule { }
