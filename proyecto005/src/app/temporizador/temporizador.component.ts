import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  standalone: false,
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent implements OnInit {

  ngOnInit(): void {
    this.contador = this.valorInicial;
  }

  // Será el padre el que envíe el valor
  @Input() valorInicial:number = 10;
  @Input() nombre="";

  contador!:number;

  // Usaremos esta variable para usar el temporizador de js
  // como es para uso interno la ponemos privado
  private temporizador:any;

  // Necesitamos un atributo con el nombre del evento que vamos a crear
  // Crea un objeto que se encarga de crear eventos
  // El output es para poder sacar el evento  fuera del componente, por ejemplo al padre
  @Output() finalCountdown = new EventEmitter();

  // Comienza con el valor inicial
  start() {
    this.contador = this.valorInicial;

    this.temporizador = setInterval(()=>{
      this.contador--;

      if (this.contador <= 0) {
        // Al llegar a 0 lanzamos el evento finalCountdown
        // this.nombre pasará el nombre al padre cuando se desencadene el evento
        this.finalCountdown.emit(this.nombre);
        // Paramos el temporizador
        clearInterval(this.temporizador);
      }

    }, 1000);
  }




}
