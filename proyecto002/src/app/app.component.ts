import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto002';
  
  // Es el objeto de ejemplo de ngMode,
  // donde irá almacenando los valores de los nuevos articulos
  art = {
    codigo: 0,
    descripcion: '',
    precio: 0,
  };

  articulos = [
    { codigo: 1, descripcion: 'papas', precio: 10.55 },
    { codigo: 2, descripcion: 'manzanas', precio: 12.1 },
    { codigo: 3, descripcion: 'melon', precio: 52.3 },
    { codigo: 4, descripcion: 'cebollas', precio: 17 },
    { codigo: 5, descripcion: 'calabaza', precio: 20 },
  ];

  // Devuelve true o false segun si hay o no articulos
  hayRegistros() {
    return this.articulos.length > 0;
  }

  // Pasamos el código del articulo
  borrar(codigo: number) {
    // Recorre todos los articulos
    for (let x = 0; x < this.articulos.length; x++)
      // si encuentra coincidencia con el código pasado lo elimina
      if (this.articulos[x].codigo == codigo) {
        // Elimina 1 elemento de articulos a partir de la posición x
        this.articulos.splice(x, 1);
        return;
      }
  }

  // Añade nuevos articulos
  agregar() {
    // El código no puede ser 0
    if (this.art.codigo == 0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }

    // El código no puede estar ya implementado en el array, por eso se recorre y se busca
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }

    // Si llega hasta aquí es pq el código no existe, se añade al array
    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio,
    });

    // Una vez añadido al array, volvemos a dejar la plantilla de ngMode con los valores por defecto
    this.art.codigo = 0;
    this.art.descripcion = '';
    this.art.precio = 0;
  }

  // Toma los valores de articulo seleccionado
  seleccionar(art: { codigo: number; descripcion: string; precio: number }) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  modificar() {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
      }
    alert('No existe el código de articulo ingresado');
  }
}
