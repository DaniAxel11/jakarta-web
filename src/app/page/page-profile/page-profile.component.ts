import { Component } from '@angular/core';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss']
})
export class PageProfileComponent {

  user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    bio: 'Desarrollador web apasionado por Angular y TypeScript.',
    profilePicture: 'assets/img/fondo.png'  // Puedes reemplazar con una URL o una imagen predeterminada
  };

  ngOnInit(): void {
    // Aquí podrías cargar los datos del perfil desde un servicio
    // this.userService.getUserProfile().subscribe(profile => this.user = profile);
  }

  updateProfile() {
    // Aquí podrías enviar los datos actualizados a un servicio
    // this.userService.updateUserProfile(this.user).subscribe(response => { ... });
    console.log('Perfil actualizado:', this.user);
  }

}
