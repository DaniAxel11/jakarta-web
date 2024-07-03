import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-modal',
  templateUrl: './page-modal.component.html',
  styleUrls: ['./page-modal.component.scss']
})
export class PageModalComponent {
  imagesVisible = false;
  images = [
    'assets/img/comida/hamburguesa.jpeg',
    'assets/img/comida/pozole.jpeg',
    'assets/img/comida/tacos.jpeg',
    'assets/img/comida/tamales.jpeg'
  ];
  selectedImage: string | undefined;

  dish = {
    name: '',
    ingredients: '',
    grams: 0,
    kilocalories: 0,
    imageUrl: '' 
  };

  @Output() formSubmit = new EventEmitter<any>();  // Agregamos un EventEmitter para emitir los datos del formulario

  showImages() {
    this.imagesVisible = true;
  }

  selectImage(image: string) {
    this.selectedImage = image;
    this.dish.imageUrl = image;  // Actualiza la ruta de la imagen en el formulario
  }

  submitForm() {
    if (this.dish.name && this.dish.ingredients && this.dish.grams > 0 && this.dish.kilocalories > 0 && this.dish.imageUrl) {
      this.formSubmit.emit(this.dish);  // Emitimos los datos del formulario al componente padre
      this.resetForm();  // Reseteamos el formulario después de enviarlo
    } else {
      // Muestra un mensaje de error si los datos no son válidos.
      console.error('Formulario inválido');
    }
  }

  resetForm() {
    this.dish = {
      name: '',
      ingredients: '',
      grams: 0,
      kilocalories: 0,
      imageUrl: '' 
    };
    this.selectedImage = undefined;
    this.imagesVisible = false;
  }
  
}
