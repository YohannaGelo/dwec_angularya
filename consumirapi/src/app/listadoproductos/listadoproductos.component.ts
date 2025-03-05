import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { IProducto } from '../i-producto';

@Component({
  selector: 'app-listadoproductos',
  standalone: false,
  templateUrl: './listadoproductos.component.html',
  styleUrl: './listadoproductos.component.css'
})
export class ListadoproductosComponent implements OnInit {

  // Esto sirve...
  // productos:any;

  // Pero si implementamos una interfaz sería este otro
  productos!:IProducto[];

  // Inyectamos nuestro servicio
  constructor(private servicioproductos:ProductosService) {}

  ngOnInit(): void {
    this.servicioproductos.all().subscribe(
      // Con este subscribe podemos recuperar lo que llega del API
      // Angular lo parsea, no necesitamos hacerlo nosotros
      (datos)=>{
        this.productos = datos;
        
        console.log(this.productos);
      }
    );
  }
}
