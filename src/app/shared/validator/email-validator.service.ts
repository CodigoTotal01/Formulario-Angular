import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  //ara hacer las peticiones http
  constructor(private http: HttpClient) { } //resulve un error o ull 

  //! valor del campo 
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);
    //evaluar si ya existe el correo 
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
    .pipe( //pero cuando lo reciba que espere 3 segundos 
    delay(3000),
        map(resp=>{
          return (resp.length == 0)  ? null: {emailTomado: true};
        })
    )
  }

}
