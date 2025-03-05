import { Component, ViewChild } from '@angular/core';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Juego dados';

  resultado = "";

  // podemos crear un objeto dado a partir de nuestro componenete dado
  // Usamos el decorador ViewChild y revisará los hijos, ademas le damos el id al que hace referencia.
  @ViewChild('dado1') midado1!:DadoComponent;
  @ViewChild('dado2') midado2!:DadoComponent;
  @ViewChild('dado3') midado3!:DadoComponent;

  lanzarDados() {
    // Como ya tenemos la referencia del objeto podemos llamar a su método lanzar
    this.midado1.lanzar();
    this.midado2.lanzar();
    this.midado3.lanzar();

    // alert(`1º Dado: ${this.midado1.valor}\n2º Dado: ${this.midado2.valor} \n3º Dado: ${this.midado3.valor}`)
    this.comprobarResultado();
  }

  comprobarResultado() {
    if (this.midado1.valorDado == this.midado2.valorDado && this.midado1.valorDado == this.midado3.valorDado) {
      this.resultado = "¡ Has ganado !";
    } else {
      this.resultado = "¡ Has perdido !";

    }
  }

}
