import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { CookieService } from 'ngx-cookie-service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private cookieService: CookieService) {}

  onSubmit(e: Event) {
    e.preventDefault(); // corrección: evitar que se recargue la página

    this.loginService.login(this.email, this.password).pipe(
      tap(response => {
        this.cookieService.set('token', response.token, 1, '/');
      }),
      catchError(error => {
        console.log(error);
        return of(null); // opcional: devolver un observable vacío para que la cadena siga fluyendo
      })
    ).subscribe();
  }
}
