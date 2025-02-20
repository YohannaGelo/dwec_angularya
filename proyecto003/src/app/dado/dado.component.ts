import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})

// Versión 2: Otra forma de cargar el valor al inicio es implementar esta interfaz
export class DadoComponent implements OnInit {

  valor = 1;

  ngOnInit(): void {
    this.valor = this.generaAleatorio();
  }

  // Versión 1: El constructor genera el número 
  // constructor() {
  //   this.valor = this.generaAleatorio();
  // }


  generaAleatorio() {
    return Math.floor(Math.random()*6)+1; // Genera un nº aleatorio del 1 al 6
  }

}
