import { Component } from '@angular/core';

// Decorador
@Component({
  // Aquí se define el nombre de la etiqueta
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto003';
}
