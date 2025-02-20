import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'proyecto004';

  ngOnInit(): void {
    this.lanzarDados();
  }

  // Angular necesita que se inicialicen las variables
  valor1:number = 1;
  
  // Podemos usar ! para definir que vamos a dar un valor más adelante
  valor2!:number;
  valor3!:number;

  // Para volcar el resultado del juego
  resultado="";

  lanzarDados() {
    this.valor1 = this.generaAleatorio();
    this.valor2 = this.generaAleatorio();
    this.valor3 = this.generaAleatorio();

    this.comprobarResultadoJuego();
  }

  comprobarResultadoJuego() {
    if(this.valor1 == this.valor2 && this.valor1 == this.valor3) this.resultado = "Has ganado"
    else this.resultado = "Has perdido";
  }

  generaAleatorio() {
    return Math.floor(Math.random()*6)+1; // Genera un nº aleatorio del 1 al 6
  }



}
