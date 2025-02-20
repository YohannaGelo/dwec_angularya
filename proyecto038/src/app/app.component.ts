import { Component, OnInit } from '@angular/core';

// Con esto avisamos al compilador de que existe aunque no lo reconozca y así no da error
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'proyecto038';

  ngOnInit(): void {
    // Para poder usar popover
    // Necesita ejecutar una función de jquery, da error pq no lo reconoce pero usamos el declare
    $('[data-bs-toggle="popover"]').popover();
  }

  aceptar() {
    alert('Ha pulsado Aceptar!');
  }

  cancelar() {
    alert('Ha pulsado Cancelar!');
  }
}
