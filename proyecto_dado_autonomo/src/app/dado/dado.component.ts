import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})

export class DadoComponent implements OnInit {

  private valor = 1;

  // Vamos a transformar el valor en una imagen
  getImageDado() {
    return `img/dado${this.valor}.gif`;
  }

  get valorDado() {
    return this.valor;
  }

  ngOnInit(): void {
    this.valor = this.generaAleatorio();
  }

  lanzar() {
    // this.valor = 5;
    this.valor = this.generaAleatorio();
  }

  generaAleatorio() {
    return Math.floor(Math.random()*6)+1; // Genera un nº aleatorio del 1 al 6
  }

}
