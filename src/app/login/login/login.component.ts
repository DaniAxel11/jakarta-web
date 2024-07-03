import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario: string;
  password: string; // Cambié 'contraseña' por 'password'

  constructor(private router: Router) {
    this.usuario = '';
    this.password = '';
  }

  login(): void {
    if (this.usuario === 'admin' && this.password === 'admin') {
      this.router.navigate(['/welcome']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
