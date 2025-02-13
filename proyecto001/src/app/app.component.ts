import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';
  nombre = 'Yohanna';
  fumador = false; // Esto mostraria false, si quermos que escriba otra cosa, creamos un método
  edad = 41;
  esFumador() {
    return this.fumador ? 'Sí es fumador' : 'No es fumador';
  }

  provincias = [
    { id: 1, nombre: 'Huelva' },
    { id: 2, nombre: 'Sevilla' },
    { id: 3, nombre: 'Cordoba' },
    { id: 4, nombre: 'Granada' }
  ];

  notas = [8.1, 9.3, 8.8];

  pulsarBoton() {
    alert("Has pulsado el botón");
  }

  contador = 0;

  incrementarContador() {
    this.contador++;
  }

  decrementarContador() {
    this.contador--;
  }

}
