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
    // Simulación de autenticación
    if (this.usuario === 'admin' && this.password === 'admin') {
      console.log('Acceso concedido al administrador');
      // Redirigir al usuario a la página deseada
      this.router.navigate(['/inventario']);
    } else {
      console.log('Credenciales incorrectas');
      alert('Credenciales incorrectas');
    }
  }
}
