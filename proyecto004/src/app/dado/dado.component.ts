import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})

export class DadoComponent {

  // Queremos recoger un dato desde el padre
  // Este decorador permite la recepción de de datos desde otro componente
  @Input() valor:number = 1;  


}
