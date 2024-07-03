import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Define el formulario reactivo para el inicio de sesión
  loginForm: FormGroup;

  // Constructor para inicializar el formulario
  constructor() {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.minLength(4)]),
      contraseña: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  // Método de ciclo de vida de Angular, se ejecuta después de que el componente se ha inicializado
  ngOnInit(): void { }

  // Método para manejar el intento de inicio de sesión
  login(): void {
    if (this.loginForm.valid) {
      // Aquí manejarías la lógica de inicio de sesión, como enviar los datos al servidor
      console.log('Login attempt:', this.loginForm.value);
      // Por ejemplo, podrías hacer una llamada HTTP o redirigir al usuario
    } else {
      // Muestra un mensaje de error o marca los campos del formulario si no son válidos
      console.log('Formulario no válido');
    }
  }
}
